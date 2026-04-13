<?php
/**
 * traitement-contact.php
 * Secure contact form handler for wisee.fr
 *
 * Security features:
 * - POST method verification
 * - Honeypot anti-spam field
 * - CSRF token validation
 * - Input sanitization (htmlspecialchars + trim)
 * - Server-side validation (email, lengths, non-empty)
 * - Rate limiting (max 3 submissions per 10 minutes per session)
 * - Secure email headers (no header injection)
 */

// Start or resume the session
session_start();

// ---------------------------------------------------------------------------
// 1. Verify HTTP method is POST
// ---------------------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

// ---------------------------------------------------------------------------
// 2. Honeypot check — if the hidden "website" field is filled, it's a bot
//    Redirect silently with success status to avoid alerting the bot
// ---------------------------------------------------------------------------
if (!empty($_POST['website'])) {
    header('Location: index.html?status=success#contact');
    exit;
}

// ---------------------------------------------------------------------------
// 3. CSRF token verification
// ---------------------------------------------------------------------------
$submitted_token = isset($_POST['csrf_token']) ? $_POST['csrf_token'] : '';
$session_token = isset($_SESSION['csrf_token']) ? $_SESSION['csrf_token'] : '';

if (empty($submitted_token) || empty($session_token) || !hash_equals($session_token, $submitted_token)) {
    // Invalid or missing CSRF token
    header('Location: index.html?status=error#contact');
    exit;
}

// Regenerate CSRF token after successful validation (one-time use)
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));

// ---------------------------------------------------------------------------
// 4. Rate limiting — max 3 submissions per 10 minutes
// ---------------------------------------------------------------------------
$now = time();
$rate_window = 600; // 10 minutes in seconds
$max_submissions = 3;

if (!isset($_SESSION['contact_submissions'])) {
    $_SESSION['contact_submissions'] = [];
}

// Remove entries older than the rate window
$_SESSION['contact_submissions'] = array_filter(
    $_SESSION['contact_submissions'],
    function ($timestamp) use ($now, $rate_window) {
        return ($now - $timestamp) < $rate_window;
    }
);

if (count($_SESSION['contact_submissions']) >= $max_submissions) {
    header('Location: index.html?status=error#contact');
    exit;
}

// ---------------------------------------------------------------------------
// 5. Sanitize all inputs
// ---------------------------------------------------------------------------
$name    = htmlspecialchars(trim($_POST['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email   = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars(trim($_POST['subject'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// ---------------------------------------------------------------------------
// 6. Server-side validation
// ---------------------------------------------------------------------------
$errors = [];

// Name: required, 2-100 chars, only letters/spaces/hyphens/apostrophes
if (empty($name) || mb_strlen($name) < 2 || mb_strlen($name) > 100) {
    $errors[] = 'name_length';
}
if (!preg_match('/^[A-Za-zÀ-ÿ\s\-\']+$/', $name)) {
    $errors[] = 'name_format';
}

// Email: required, valid format, max 100 chars
if (empty($email) || mb_strlen($email) > 100) {
    $errors[] = 'email_length';
}
// Validate email on the raw (non-encoded) value
$raw_email = trim($_POST['email'] ?? '');
if (!filter_var($raw_email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email_invalid';
}

// Subject: required, max 100 chars
if (empty($subject) || mb_strlen($subject) > 100) {
    $errors[] = 'subject_length';
}

// Message: required, 10-2000 chars
if (empty($message) || mb_strlen($message) < 10 || mb_strlen($message) > 2000) {
    $errors[] = 'message_length';
}

if (!empty($errors)) {
    header('Location: index.html?status=error#contact');
    exit;
}

// ---------------------------------------------------------------------------
// 7. Prepare and send email
// ---------------------------------------------------------------------------
$recipient = 'hakim.irbah@wisee.fr';

// Sanitize values used in headers to prevent header injection
// Remove any newline characters from header-injected values
$safe_name  = str_replace(["\r", "\n", "%0a", "%0d"], '', $name);
$safe_email = str_replace(["\r", "\n", "%0a", "%0d"], '', $raw_email);

$email_subject = 'Message du site Wisee.fr : ' . str_replace(["\r", "\n"], '', $subject);

$email_body  = "Nom: {$name}\n";
$email_body .= "Email: {$safe_email}\n\n";
$email_body .= "Sujet: {$subject}\n\n";
$email_body .= "Message:\n{$message}\n";

// Secure email headers — use Reply-To instead of From to avoid spoofing issues
$email_headers  = "From: noreply@wisee.fr\r\n";
$email_headers .= "Reply-To: {$safe_name} <{$safe_email}>\r\n";
$email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$email_headers .= "X-Mailer: WiseeFR-ContactForm\r\n";
$email_headers .= "MIME-Version: 1.0\r\n";

// Send the email
$mail_sent = mail($recipient, $email_subject, $email_body, $email_headers);

// Record this submission for rate limiting
$_SESSION['contact_submissions'][] = $now;

// ---------------------------------------------------------------------------
// 8. Redirect based on result
// ---------------------------------------------------------------------------
if ($mail_sent) {
    header('Location: index.html?status=success#contact');
} else {
    header('Location: index.html?status=error#contact');
}
exit;
