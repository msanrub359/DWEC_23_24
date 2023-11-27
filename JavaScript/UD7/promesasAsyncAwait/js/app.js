"use strict";
/**Sin promesas */
// const aprender = (texto) => {
//   setTimeout(() => {
//     console.log(texto);
//   }, 2000);
// };

// console.log("Estoy");
// aprender("aprendiendo");
// console.log("Promesas/AsyncAwait");

/**Con promesas */
//crear promesa
const aprender = (texto) => {
  return new Promise((resolve, reject) => {
    if (texto != "" && texto != undefined) {
      setTimeout(() => {
        resolve(texto);
      }, 2000);
    } else {
      reject("No estoy aprendiendo");
    }
  });
};
/**
 * Promesas .then .catch
 */
// console.log("Estoy");
// aprender("aprendiendo")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promesas/AsyncAwait");
//   });

 /**
  * async/await
  */
  
//const mostrar=async()=>{
async function mostrar(){
    console.log("Estoy");
    try {
        const response=await aprender("aprendiendo")
        console.log(response);

    } catch (error) {
        console.log(error)
    }
    console.log("Promesas/AsyncAwait");
}

mostrar();
