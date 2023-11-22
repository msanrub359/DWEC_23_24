<?php
    //preguntar por el valor de la variable
    if($_REQUEST['valor']=='POST'){
    	echo "Hola ".$_REQUEST['nombre']. " ha pulsado el botón POST";
    }else{
    	echo "Hola " .$_REQUEST['nombre']." ha pulsado el botón GET";
    }
?>