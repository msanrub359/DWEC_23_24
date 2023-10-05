"use strict"; 
//declaraciones

//clase constructor
function Electro (nom, precio, color){
    //las propiedades
    this.nombre=nom;
    this.precio=precio;
    this.color=color;
    
    //métodos 
   
    this.toString=function(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y el color  es ${this.color}`;
    }

}
//crear nuevos métodos
//prototype
// Electro.prototype.mostrarMasInfor=()=>{
//     return `Podemos añadir más funcinalidad fuera de la clase base`;
// }

// //Herencia
// function DispElec(nom,precio,color,disco,ram){
//     //crear el constructor
//     Electro.call(this, nom, precio,color); //propiedades de la clase base
//     this.disco=disco;
//     this.ram=ram;

//     //métodos
//     this.toString=function(){
//         return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}\n El disco duro es de ${this.disco} y la memoria es de ${ram}`;
//     }
// }
// //pasar los prototype de la clase base a la clase hija
// DispElec.prototype=Object.create(Electro.prototype);

// const frigo=new Electro("Frigo", 200,'red');
// const horno=new Electro("Horno", 300,'blue');
// const portatil=new DispElec("HP", 700, "white", "500Gb", '12Gb')
// console.log(frigo, horno);
// console.log(frigo.toString());
// console.log(horno.toString());
// console.log(frigo.mostrarMasInfor());
// console.log(horno.mostrarMasInfor());

// console.log(portatil);
// console.log(portatil.toString());
// console.log(portatil.mostrarMasInfor());
