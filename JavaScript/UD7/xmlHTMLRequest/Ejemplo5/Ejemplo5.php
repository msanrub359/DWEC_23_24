<?php
if ($_REQUEST['ca']=='Andalucia')
{

  $capitales=array('Almeria','Cádiz','Córdoba','Granada','Huelva','Jaén', 'Málaga','Sevilla');
}
if ($_REQUEST['ca']=='Castilla La Mancha')
{
  $capitales=array('Albacete','Ciudad Real', 'Cuenca', 'Guadalajara','Toledo');
}
if ($_REQUEST['ca']=='Extremadura')
{
  $capitales=array('Badajoz', 'Caceres');
}

$xml="<?xml version=\"1.0\"?>\n";
$xml.="<regiones>\n";
for($f=0;$f<count($capitales);$f++)
{
  $xml.="<capital>".$capitales[$f]."</capital>\n";
 
}
$xml.="</regiones>\n";
header('Content-Type: text/xml');
echo $xml;
?>
