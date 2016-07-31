<?php
if (empty($_POST["submit"])) {
	echo "Form is not submitted";
	exit;
}
if (empty($_POST["fullname"]) || empty($_POST["email"])) {
	echo "Please fill the form";
	exit;
} 
$name = $_POST["fullname"];
$email = $_POST["email"];

mail("aricesar@sbcglobal.net", "New Form Submission", "New inquiry $name, and $email");
header("Location: thankyou.html");
?>