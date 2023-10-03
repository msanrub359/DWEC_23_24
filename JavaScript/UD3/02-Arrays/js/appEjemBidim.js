"use strict";
/**
 * @description. Generar un array bidimensional 4*4 con números aleatorios de 1 al 99
 * Mostrar el array por filas y columnas con for primitivo y forEach.
 * La creación del array se realizará en una función y cada iteración en otra función diferente
 *
 */

//declaraciones
const aNumeros = [];

const crear = () => {
  for (let fila = 0; fila < 4; fila++) {
    aNumeros[fila] = []; //crear un array bidimensional
    for (let col = 0; col < 4; col++) {
      aNumeros[fila].push(Math.round(Math.random() * 99));
    }
  }
};
const mostrarFor = () => {
  document.write("-----For -------<br>");
  for (let fila = 0; fila < aNumeros.length; fila++) {
    for (let col = 0; col < aNumeros[fila].length; col++) {
      document.write(`${aNumeros[fila][col]} `);
    }
    document.write(`<br> `);
  }
};
const mostrarForEach = () => {
  document.write("</br>-----For Each -------<br>");
  aNumeros.forEach(fila =function() {
    fila.forEach(elemento => {
      document.write(`${elemento} `);
    });

    document.write(`<br> `);
  });
};

//script
crear();
mostrarFor();
mostrarForEach();
