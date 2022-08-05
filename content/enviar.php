<?php
$nombre=$_POST['name'];
$pais=$_POST['pais'];
$telefono=$_POST['phone'];
$email=$_POST['mail'];
$ciudad=$_POST['ciudad'];
$mensaje=$_POST['mensaje'];

$header='From: '.$email."\r\n";
$header.='X-Mailer: PHP/'.phpversion() ."\r\n";
$header.="\r\nMime-Version: 1.0 \r\n";
$header.='Content-Type: text/plain';

$message="Este mensaje fue enviado por: ".$nombre."\r\n";
$message.="Su e-mail es: ".$email."\r\n";
$message.="Su telefono es: ".$telefono."\r\n";
$message.="Su mensaje es: ".$mensaje."\r\n";
$message.="Su ciudad es: ".$ciudad."\r\n";
$message.="Su pais es: ".$pais."\r\n";
$message.="Enviado el: ".date('d/m/Y', time());

$para='daniel.manny10@hotmail.com';
$asunto='Nuevo mensaje de contacto';

mail($para, $asunto, utf8_decode($message), $header);

header("Location: index.html");
?>