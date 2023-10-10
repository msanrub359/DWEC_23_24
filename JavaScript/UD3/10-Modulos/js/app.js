"use strict";
//módulos en javascript permite compartir el código en distintos
//scripts que pueden reutilizarse.
//import {Alumno, mensaje} from "./modulos.js" //importar individualmente
import * as libreria from "./modulos.js"; //todo el contenido exportable del módulo



//cuerpo script
try {
    const alumno = new libreria.Alumno("Pepe", "Pérez Rodríguez", 23);
   console.log(libreria.mensaje);
    
    console.log(alumno.nombre);
    console.log(alumno.apellidos); //error
    //alumno.edad = 12; 
} catch (error) {
    console.log(error);
}

