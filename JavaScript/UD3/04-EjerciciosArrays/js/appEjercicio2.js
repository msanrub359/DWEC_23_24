"use script"
/**
 * @description Realizar un script que permita crear una array 3*3, rellénala con datos numéricos del 1 al 99, calcula su traspuesta y muestra el original y su traspuesta
 * 
 * Crear una función para rellenar el array
 * Crear una función para crear el array traspuesta
 * Crear una función para mostrar los arrays (original y la traspuesta) (la función tendrá los parámetros del array y un texto)
 */
const aNumeros = [];

/**
 * @description Esta función crea un array bidimensional de 3 filas y 3 columnas
 * 
 */
const rellenarArray = () => {
  for (let fila = 0; fila < 3; fila++) {
    aNumeros[fila]=[];
    for (let col = 0; col < 3; col++) {
      aNumeros[fila].push(Math.round(Math.random()*98)+1)
    }
  }
};
/**
 * @description genera el array traspuesta de otro array
 * @returns retorna el array traspuesta
 */
const crearTraspuesta=()=>{
    const aTraspuesta=[[],[],[]];
    for (let fila = 0; fila < aNumeros.length; fila++) {
        
        for (let col = 0; col < aNumeros[fila].length; col++) {
            aTraspuesta[col][fila]= aNumeros[fila][col];
        }
        
    }
    return aTraspuesta
}
/**
 * @description muestra el contenido de un array
 * @param {aNumeros} se le pasa el array a mostrar
 * @param {text} la cabecera a mostrar
 */
const mostrarArray=(aNumeros,texto)=>{
   document.write(`<br>---${texto}---<br>`)
    for (const fila of aNumeros) {
       for (const elemento of fila) {
        document.write(`${elemento} `)
       } 
       document.write(`<br>`)
    }
}

//script 
rellenarArray();
mostrarArray(aNumeros, 'array original');
mostrarArray(crearTraspuesta(), 'array Traspuesta');
