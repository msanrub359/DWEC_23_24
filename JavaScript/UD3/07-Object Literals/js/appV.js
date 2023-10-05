"use strict"; 
//declaraciones

//Object.keys, Object.values, Object.entries

const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red',
    //método
    toString:function(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
}  

//  console.log(Object.keys(electro));//devuelve array con las claves 
//  console.log(Object.values(electro));//devuelve array con los valores el objeto
//  console.log(Object.entries(electro));//devuelve array con las claves y valores el objeto

