<?php
// Configure OASIS_CONTACT_TO and a working PHP mail transport on the host.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Please submit the contact form.'); }
$recipient = getenv('OASIS_CONTACT_TO');
if (!$recipient || $recipient !== 'oasisagroagent@gmail.com') {
    http_response_code(503);
    exit('Online enquiries are not configured. Please email oasisagroagent@gmail.com or call 0393 238073. Nothing has been sent.');
}
$name = trim(str_replace(["\r", "\n"], ' ', strip_tags($_POST['name'] ?? '')));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$query = trim(strip_tags($_POST['query'] ?? 'General enquiry'));
$message = trim(strip_tags($_POST['message'] ?? ''));
if (!$name || !$email || !$message) { http_response_code(400); exit('Please enter your name, a valid email address and a message.'); }
$body = "Name: $name\nEmail: $email\nQuery: $query\n\n$message";
if (mail($recipient, 'Oasis website enquiry', $body, 'Reply-To: ' . $email)) {
    echo 'Your enquiry has been accepted by the mail server. Thank you.';
} else {
    http_response_code(500);
    echo 'Your enquiry could not be sent. Please email oasisagroagent@gmail.com or call 0393 238073.';
}
?>
