"use strict"
//Permitir la entrada de un dato que contenga nombre y 2 apellidos
//Controlar que la entrada tiene tres palabras y no es vacío. Si esto
//ocurre, mostrar mensaje de error y volver a pedir los datos.

//Crear un array y en cada posición tendrá nombre, apellido1 y apellido2
//mostrar un mensaje indicando, "El nombre es ...., el primer apellido es .... y el
//segundo apellido es ..."
//Crear un usuario, utilizando el primer caracter del nombre, 3 primeras letras del primer
//apellidos y las 3 últimas del segundo apellido. Mostrar usuario

//entrada de dato
let cadena=prompt("Introduza nombre y 2 apellidos")

while (cadena!==null && (cadena=="" || cadena.split(" ").length!=3)){
   cadena=prompt("Error, al introducir datos\nIntroduza nombre y 2 apellidos");
}

//extraer nombre y apellidos mediante el método split

if (cadena!=null){
   const aNomApe=cadena.split(" ");
   const usuario=`${aNomApe[0].charAt(0)}${aNomApe[1].slice(0,3)}${aNomApe[2].slice(-3)}`;
   document.write(`El nombre es ${aNomApe[0]} y el primer apellido es ${aNomApe[1]} y el segundo apellido es ${aNomApe[2]}`);
   document.write(`El usuario es ${usuario}`)
   //crear usuario
}