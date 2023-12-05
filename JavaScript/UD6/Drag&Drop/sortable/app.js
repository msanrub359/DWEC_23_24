"use strict";
let aNum = [];

$(() => {
    generarNumeros();
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $("button").on("click", comprobar);
  
})
let generarNumeros = () => {
    let contador = 0;
    aNum=[]; //inicializar el array
    while (contador < 5) {
        let numero = Math.round(Math.random() * 49) + 1
        // if (aNum.indexOf(numero)==-1){ //el número no está en el array
        //     aNum.push(numero);
        //     contador++;
        // }
        if (jQuery.inArray(numero, aNum) < 0) { //el número no se encuentra
            aNum.push(numero);
            contador++;
        }

    }
    //cargar en la lista
    cargarNumLista();
     //odenar
     aNum.sort((a, b) => {
        return a - b
    });
}
let cargarNumLista = () => {

    $('#sortable span').each((ind, ele) => {
        $(ele).text(aNum[ind]) //jquery
        // ele.innerText=aNum[ind]//javascript nativo
    })
}
let comprobar = () => {
    let ordenar = true
   
    //comprobar las posiciones de la lista con el array
    $("#sortable span").each((ind, ele) => {
        if ($(ele).text() != aNum[ind]) {
            ordenar = false;
        }
    })
    if (ordenar) {
       mostrarMensaje("¡Los números están ordenados", true);
    } else {
        mostrarMensaje("¡Los números no están ordenados",false);
    }
   
   
}
let mostrarMensaje = (mensaje, estado) => {
   
    Swal.fire({
        title: mensaje,
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: `No seguir jugando`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            if(estado){ //si ha completado correctamente el orden
                generarNumeros();
            }
        
        } 
      });
}