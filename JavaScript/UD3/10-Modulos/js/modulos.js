"use strict"

export const mensaje="Hola a todos";

export const calcularMedia=()=>{

}

const division=()=>{ //no es exportable

}

export class Alumno {
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