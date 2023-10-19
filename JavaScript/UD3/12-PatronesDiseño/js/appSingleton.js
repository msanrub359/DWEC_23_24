"use strict"

/**
 * @description Patrón de Diseño Singleton: El patrón Singleton se utiliza para asegurarse
 * que una clase solo tenga una instancia y proporcionar un punto de acceso global a esa instancia.
 */

//Ejemplo 
class Singleton{
    constructor(){
        if (!Singleton.instance){
            Singleton.instance=this
        }
        return Singleton.instance
    }

    //Métodos de la clase
}

//cuerpo script

const instancia1 = new Singleton();
const instancia2 = new Singleton();
console.log(instancia1=== instancia2);
