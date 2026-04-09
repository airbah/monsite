<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer les données du formulaire
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = strip_tags(trim($_POST["message"]));
    
    // Vérifier les données
    if (empty($name) || empty($message) || empty($subject) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Rediriger avec une erreur
        header("Location: index.html?status=error#contact");
        exit;
    }
    
    // Destinataire de l'email (votre adresse)
    $recipient = "hakim.irbah@gmail.com";
    
    // Sujet de l'email
    $email_subject = "Message du site Wisee.fr : $subject";
    
    // Corps de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Sujet: $subject\n\n";
    $email_content .= "Message:\n$message\n";
    
    // En-têtes de l'email
    $email_headers = "From: $name <$email>";
    
    // Envoyer l'email
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        // Succès
        header("Location: index.html?status=success#contact");
    } else {
        // Échec
        header("Location: index.html?status=error#contact");
    }
} else {
    // Accès direct au script sans passer par le formulaire
    header("Location: index.html");
}
?>