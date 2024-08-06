<?php
include('config/database.php');

header('Content-Type: image/png');
readfile('pixel.png');

$ip = $_SERVER['REMOTE_ADDR'];

$date = date('Y-m-d H:i:s');

$log = "Time: $date, IP: $ip\n";
file_put_contents('logs.txt', $log, FILE_APPEND | LOCK_EX);

?>