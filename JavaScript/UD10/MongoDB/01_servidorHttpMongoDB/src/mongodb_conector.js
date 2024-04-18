"use strict"

//importar el paquete mysql para realizar la conexión

import { MongoClient } from "mongodb";
const URI="mongodb+srv://msanrub359:mongodb@mongodbnode.ml6tunj.mongodb.net/?retryWrites=true&w=majority";

//crear la instancia del cliente Mongodb utilizando la URI de conexión que nos ha proporcionado MongoDB.
const client=new MongoClient(URI);

let conexion
const conexionBD=async()=>{
    //conectar al servidor de forma asíncrona
    try {
        if(!conexion){
            conexion=await client.connect();
            console.log('Conectada la BD MongoDB');
        }
             
        return conexion.db("empresadb");  
    } catch (error) {
        console.log('Error!! BD no conectada ');
    }
    
}
    
export default conexionBD;