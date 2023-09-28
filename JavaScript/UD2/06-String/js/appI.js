"use strict"
//generar el abecedario
for (let index = 65; index <=90; index++) {
    //convertir el código ascii a carácter
    document.write(`${String.fromCharCode(index)} `);
    //mostrar Ñ
    if (index==78){
        document.write(`${String.fromCharCode(209)} `);
    }
}

document.write(`<br>---Abecedario aleatorio---<br>`);
//mostrar 20 letras del abecedario de forma aleatoria
for (let index = 1; index <=20; index++) {
    //convertir el código ascii a carácter
    const codigo=Math.round(Math.random()*(90-65))+65
    document.write(`${String.fromCharCode(codigo)} `);
   
}