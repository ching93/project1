<?php
header("Content-type:text/html; charset=utf8");
$text = $_POST["json"];
$path = $_POST["path"];
echo "before:<br />";
file_put_contents($path,$text);
echo "success";

?>