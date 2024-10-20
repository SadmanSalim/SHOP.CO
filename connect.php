<?php

$host="localhost";
$user="root";
$pass="";
$db="login";
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>




<!-- 
$host="sql107.infinityfree.com";
$user="if0_37551191";
$pass="SYjAvSmBD6r6O";
$db="if0_37551191_login"; -->