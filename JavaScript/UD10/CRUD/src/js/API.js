"use strict"

const url='http://localhost:3000/clientes';

export const getClientes=async()=>{
    try {
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        return({'data':data})
    } catch (error) {
       return(error) 
    }

}
export const getCliente=async(id)=>{
    
    try {
        const response=await fetch(`${url}/${id}`);
        const data=response.json();
        console.log(data);
        return data
    } catch (error) {
        return {error};
    }
}
export const addClientes=async(cliente)=>{

    const param={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
           // 'Content-Type':'application/x-www-form-urlencoded'
        },
         body:JSON.stringify(cliente)
       // body:cliente
    }
    try {
        const response=await fetch(url, param);
        const data=response.json();
        return({'mensaje':'Insertado'})
    } catch (error) {
        return({'mensaje':'NO insertado'}) 
    }
}
export const deleteCliente=async(id)=>{
    const param={
        method:"DELETE"
    }
    try {
        const response=await fetch(`${url}/${id}`, param);
        const data=await response.json(); //modificar
        return ({'mensaje': 'borrado'})
    } catch (error) {
        return ({'mensaje': 'NO borrado'})
    }
}
export const updateCliente=async(cliente, id)=>{
    const param={
        method:'PUT',
        
        headers:{
            'Content-Type':'application/json'
           
        },
        body:JSON.stringify(cliente)
    }
    try {
        const response=await fetch(`${url}/${id}`,param);
        const data=await response.json();
        return ({'mensaje': 'Actualizado'})
    } catch (error) {
        return ({'mensaje': 'No Actualizado'})
    }
}
