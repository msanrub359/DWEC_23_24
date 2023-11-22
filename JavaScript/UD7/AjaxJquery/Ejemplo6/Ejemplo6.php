<?php

if ($_REQUEST['ca'] == 'Andalucia') {

    $capitales = array('Almeria', 'Cádiz', 'Córdoba', 'Granada', 'Huelva', 'Jaén', 'Málaga', 'Sevilla');
}
if ($_REQUEST['ca'] == 'Castilla La Mancha') {
    $capitales = array('Albacete', 'Ciudad Real', 'Cuenca', 'Guadalajara', 'Toledo');
}
if ($_REQUEST['ca'] == 'Extremadura') {
    $capitales = array('Badajoz', 'Caceres');
}
header('Content-type: application/json; charset=utf-8');
echo json_encode($capitales);
exit();
?>
