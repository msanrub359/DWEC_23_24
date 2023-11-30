"use strict";
$(() => {
  $("#regiones").on("change", mostrarProv);
});

const mostrarProv=() =>{
  const param=`ca=${$("#regiones").val()}`
  axios.post("Ejemplo6.php",param)
    
    .then((response) => {
        let cadena = "";
        //borrar contenido de capa
        //$("#mostrar").empty();
        $(response.data).each((ind, ele) => {
          cadena += ele + "<br>";
        });
        $("#mostrar").html(cadena);
    })
    .catch((error) => {
      console.error(error);
    });
  
}
