"use strict";
import { Alumno } from "./appAlumno.js";

//declaraciones de estructuras globales
const aAlumnos = [];

const entradaDatos = () => {
  let nomApe = prompt(
    "Introduzca nombre y apellidos del alumno (Cancelar->Fin)"
  );
  while (nomApe != null) {
    try {
      let oAlumno = new Alumno();
      oAlumno.nombre = nomApe;
      oAlumno.curso = prompt("Introduzca curso");
      oAlumno.edad = prompt("Introduzca edad");
      //añadir el objeto al array
      aAlumnos.push(oAlumno);

      
    } catch (error) {
        alert(`El alumno no ha sido creado\n ${error}`)
    }
    nomApe = prompt(
        "Introduzca nombre y apellidos del alumno (Cancelar->Fin)"
      );
  }
};

const mostrarDatos=()=>{
    //ordenar
   
    aAlumnos.sort((a,b)=> b.edad-a.edad); //ordenando el array por la propiedad edad
    
    aAlumnos.forEach(alumno=>{
        document.getElementById("mostrar").innerHTML+=alumno.toString();
    })

}

//script
entradaDatos();
mostrarDatos(); //mostrar los alumnos ordenados por edad descendente
