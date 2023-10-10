"use strict"
export class Alumno{
    #nombre
    #curso
    #edad
    constructor(nombre, curso, edad){
        this.#nombre=nombre;
        this.#curso=curso;
        this.#edad=edad
    }

    //getters y setters
    get nombre(){
        return this.#nombre;
    }
    set nombre(value){
        if (value.trim().length!=0){
            this.#nombre=value.toUpperCase(); //mayúsculas
        }else{
            throw ("el nombre no puede estar vacío")
        }
    }

    get curso(){
        return this.#curso;
    }
    set curso(value){
        if (value.trim().length!=0){
            this.#curso=value.toUpperCase(); //mayúsculas
        }else{
            throw ("el curso no puede estar vacío")
        } 
    }
    get edad(){
        return this.#edad;
    }
    set edad(value){
        if (!isNaN(value)){
            this.#edad=parseInt(value); //mayúsculas
        }else{
            throw ("La edad debe ser numérica")
        } 
    }

    toString(){
        return (`El nombre del alumno es ${this.#nombre}, su edad es ${this.#edad} y cursa ${this.#curso}<br>`)
    }
}