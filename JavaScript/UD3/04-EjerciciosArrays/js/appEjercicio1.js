"use script"
/**
 * @description Realizar un script que permita crear un array de 20
 * números, rango -500 a 1500, que permita simular transacciones de dinero
 * los números negativos son gastos y los positivos ingresos
 * Utiliza el método find para encontrar la primera transacción con un gasto
 * Utiliza el método some para verificar si hay una transacción con un ingreso mayor de 900
 * Utiliza el método reduce para calcular el saldo total
 * Utiliza el método sort para ordenar las transacciones de forma descendente (mayor a menor)
 */

const aNumeros = [];

const rellenarArray = () => { //rellenar el array
  for (let fila = 0; fila < 20; fila++) {
    aNumeros.push(Math.round(Math.random() * (1500 - (-500)) + -500));
  }
};

/**
 * 
 * @description muestra el contenido del array
 */
const mostrarArray = (texto) => {
  document.write(`<br>---${texto}---<br>`);

  aNumeros.forEach((element) => {
    document.write(`${element}, `);
  });
};

const mostrarDatos = () => {
  //Utiliza el método find para encontrar la primera transacción con un gasto
  const gasto = aNumeros.find((gasto) => gasto < 0);
  document.write(`<br>El primer gasto es ${gasto}<br>`);
  //Utiliza el método some para verificar si hay alguna transacción con un ingreso mayor de 900
  const ingresoNovecientos = aNumeros.some((ingreso) => ingreso > 900);
  document.write(`¿Hay ingresos mayores a 900? ${ingresoNovecientos}<br>`);

  //Utiliza el método reduce para calcular el saldo total después de todas las transacciones.
  const saldoTotal = aNumeros.reduce((saldo, operacion) =>saldo+operacion,0);
  document.write(`Saldo total= ${saldoTotal}<br>`);
  aNumeros.sort((a,b)=>b-a)
  mostrarArray('Transacciones ordenadas')
};

//script
rellenarArray();
mostrarArray("Transacciones");
mostrarDatos();