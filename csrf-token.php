<?php
/**
 * csrf-token.php
 * Generates and returns a CSRF token for the contact form.
 * Called via fetch() from the client-side to populate the hidden field.
 */

// Start or resume the session
session_start();

// Set JSON content type
header('Content-Type: application/json');

// Allow same-origin requests only
header('X-Content-Type-Options: nosniff');

// Generate a CSRF token if one doesn't exist in the session
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Return the token as JSON
echo json_encode(['token' => $_SESSION['csrf_token']]);
exit;
