"use strict"
/**
 * @description Crear un script que utilice la estructura de map para
 * realizar el siguimiento de las puntuaciones de los jugadores. 
 * Se pedirá mediante prompt el nombre y la puntuación.
 * El nombre no podrá ser vacío y al pulsar el botón Cancelar,
 * finalizará la entrada de datos (función, devuelven el dato)
 * Las puntuaciones, se controlarán que sean numéricas y no se permitirán
 * datos nulos (función, devuelven el dato)
 * A continuación, se ordenará por puntuación ascendente y se mostrará
 * el mapa ordenado.
 * Utilizar funciones para la entrada de datos, otra para la ordenación
 * y otra para mostrar el mapa ordenado.
 */


//declaraciones
const calificacion=new Map();

//funciones
/**
 * @description isNumero permite controlar que la puntuación sea un número
 * @param {string} texto - cadena que se mostrará en el prompt
 * @returns {cadena}
 */
const isNumero=(texto)=>{
    let puntuacion=prompt(texto);
    while(puntuacion==null || isNaN(puntuacion) ){
        puntuacion=prompt(`Error, debe ser un número\n${texto}`);
    }
    return parseInt(puntuacion);
}

/**
 * @description permite controlar que la cedana no esté vacía
 * @param {string} texto  cadena que se mostrará en el prompt
 * @returns {cadena} devuelve el nombre
 */
const isCorrectNom=(texto)=>{
    let nombre=prompt(texto);
    while(nombre!==null && nombre.trim()===""){
        nombre=prompt(`Error, no debe ser una cadena vacía\n${texto}`);
    }
    return nombre;
}
/**
 * @description Crea el mapa con el nombre y la puntuación, hasta que se pulse cancelar en el nombre
 */
const crearMapa = () => {
  let nomJugador = isCorrectNom("Introduzca nombre del jugador, [Cancelar->Fin]");
  while (nomJugador != null ) {
    let puntuacion = isNumero(`Introduzca la puntuación del jugador ${nomJugador}`);
    //añadir al mapa
    calificacion.set(nomJugador, puntuacion)
    nomJugador = isCorrect("Introduzca nombre del jugador");
  }
};

/**
 * @description ordena el mapa a través de un array y lo vuelve a pasar al mapa
 */
const ordenarMapa=()=>{
    const aJugadores=[...calificacion]; //crear un array con los datos del mapa
    aJugadores.sort((a,b)=>a[1]-(b[1])); //ordenar de menor a mayor por puntuación
    //borrar el mapa
    calificacion.clear(); //limpia el mapa

    aJugadores.forEach(elemento=>{ //carga del array al mapa
        calificacion.set(elemento[0], elemento[1])
    })
}

const mostrarMapa=()=>{
    //recorrer el mapa y mostrar elcontenido
    for (const [nombre,puntuacion] of calificacion) {
        console.log(`El jugador ${nombre} y la puntuación es ${puntuacion}`);
    }
}

//script

crearMapa();
ordenarMapa()
mostrarMapa();
