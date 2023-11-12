"use strict";
let aNum = [];

$(() => {
    generarNumeros();
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $("button").on("click", comprobar);
    confVentana();
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
}
let cargarNumLista = () => {

    $('#sortable span').each((ind, ele) => {
        $(ele).text(aNum[ind]) //jquery
        // ele.innerText=aNum[ind]//javascript nativo
    })
}
let comprobar = () => {
    let ordenar = true
    //odenar
    aNum.sort((a, b) => {
        return a - b
    });
    //comprobar las posiciones de la lista con el array
    $("#sortable span").each((ind, ele) => {
        if ($(ele).text() != aNum[ind]) {
            ordenar = false;
        }
    })
    if (ordenar) {
        $("#dialogo p").text("¡Los números están ordenados");
    } else {
        $("#dialogo p").text("¡Los números no están ordenados");
    }
    //mostrar la ventana modal
    $("#dialogo").dialog("open")
}
let confVentana = () => {
    $("#dialogo").dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Seguir Jugando": function () {
                generarNumeros();
                $(this).dialog("close");
            },
            "Fin del juego": function () {
                $(this).dialog("close");
            }
        },
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });
}