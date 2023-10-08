"use strict";
//propiedades y métodos privados
class Profe{

}
class Alumno {
  #nombre;
  #apellidos;
  #edad;
  constructor(nom, ape, edad) {
    this.#nombre = nom;
    this.#apellidos = ape;
    this.#edad = edad;
  }
  get nombre() {
    console.log("getter");
    return this.#nombre;
  }
  set nombre(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value != "") {
      this.#nombre = value;
    } else {
      //generar un error
      throw "Error, el nombre no puede estar vacío";
    }
  }
  get edad() {
    console.log("getter");
    return this.#edad;
  }
  set edad(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value > 18) {
      this.#edad = value;
    } else {
      //generar un error
      throw "Error, el alumn@ debe ser mayor de edad";
    }
  }

  //método
  toString() {
    return `El nombre del alumno es ${this.#nombre} ${this.#apellidos} y tiene ${this.#edad} años<br>`;
  }
  #nombrefuncion(){ //método privado

  }
}

//cuerpo script
try {
    const alumno = new Alumno("Pepe", "Pérez Rodríguez", 23);
    console.log(`instancia ${alumno instanceof Profe}`); //averiguar si un objeto ha sido instanciado por una determinada clase
    
    console.log(alumno.nombre);
  // console.log(alumno.#apellidos); //error
    alumno.edad = 12; 
} catch (error) {
    console.log(error);
}

