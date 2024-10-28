<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

?>

<?php
include('vendor/inc/config.php');
$user = json_decode(file_get_contents('php://input'));
$fname = $user->fname;
$email = $user->email;
$phone = $user->phone;
$message = $user->message;

if($fname!="" && $email!="" && $phone!="" && $message!=""){
    $mysqli->query("INSERT INTO tms_contact(id, fname, email, phone, message) values (null,'$fname','$email','$phone','$message')") ;

}


if($mysqli->affected_rows)
echo "Inserted";

?>