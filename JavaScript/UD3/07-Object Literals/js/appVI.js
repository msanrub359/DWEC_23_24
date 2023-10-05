"use strict"; 
//declaraciones

//Objetos dentro de objetos

const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red',
    informacion:{
        medidas:{
            peso:'50kg',
            altura:'2m'
        },
        fabricacion:{
            pais:'España'
        }
    },
    //método
    toString:function(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
}  
// console.log(electro.informacion);
// //mostrar las medidas
//  console.log(electro.informacion.medidas);
//  //acceder a la propiedad pais
//  console.log(electro.informacion.fabricacion.pais);
 
//destructuring
//extraer en una variable el objeto informacion
//const {informacion}=electro;
//console.log(informacion);
//extraer en una variable el objeto medidas
//  const {informacion:{medidas}}=electro;
//  console.log(medidas);
//extraer en una variable la propiedad altura
// const {informacion:{medidas:{altura}}}=electro;
// console.log(altura);
//extraer en una variable la propiedad pais
// const {informacion, informacion:{fabricacion:{pais}}}=electro;
// console.log(informacion);
// const{pais}=electro.informacion.fabricacion;
//  console.log(pais);