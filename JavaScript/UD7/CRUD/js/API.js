
"use strict"
 const url="http://localhost:3000/clientes"

 export const addCliente=async (cliente)=>{

    const param={
        method:"POST",
        body:cliente, //nomCliente="pepe"&emailCliente="dkldl@gmail.com"
        headers:{
            'Content-Type': "application/x-www-form-urlencoded"
        }
    }
    try {
        const response= await fetch(url, param);
        const data= await response.json();
        return ({'mensaje': 'insertado'}) 
    } catch (error) {
        return ({'mensaje': 'NO insertado'}) 
    }
    

 }
 export const getClientes=async ()=>{

        try {
        const response= await fetch(url);
        const data= await response.json();
        return ({'data': data}) 
    } catch (error) {
        return ({'error': error}) 
    }
    

 }
