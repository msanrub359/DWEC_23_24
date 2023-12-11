<?php

require_once "connection.php";


$id=htmlspecialchars($_REQUEST['perro']);


$jsondata["data"] = array();

if (!empty($id)){
    $sql="SELECT * FROM perros where chip='$id'";
      
}else{
    $sql="SELECT * FROM perros";
}

try {
	$stmt = $pdo->prepare($sql);
	$stmt->execute();
	$jsondata["data"] = $stmt->fetchall();
} catch (PDOException $e) {
	$jsondata["mensaje"]="Error";
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata);
$pdo=null;

exit();