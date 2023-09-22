"use strict";
//permitir crear solo una ventana secundaria y no se
//cerrará la ventana principal, si ventana secundaria
//está abierta
let ventana;
//abrir subventana
function crearVent() {
  if (ventana==undefined || ventana.closed) {//devuelve true si está cerrada y false se está abierta
    ventana = window.open("", "secundaria", "width=200,height=200");
    //añadir título y botón a la ventana secundaria
    ventana.document.write("<h1>Ventana secundaria</h1>");
    ventana.document.write(
      "<button type='button' onclick='self.close()'>Cerrar ventana</button>"
    );
  }else{
    alert("La ventana secundaria ya está abierta")
  }
}

function cerrarVent() {
    if (ventana==undefined || ventana.closed) {
        self.close(); // cerrar ventana principal
    }else if (confirm(`Ventana secundaria abierta\n¿Quiere cerrar la ventana secundaria?`)){
        ventana.close();
        self.close();
    }else{
        ventana.focus();
    }
} 
