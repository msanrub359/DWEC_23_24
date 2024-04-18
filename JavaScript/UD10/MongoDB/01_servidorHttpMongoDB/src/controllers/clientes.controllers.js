import conexionBD from "../mongodb_conector.js";
import { ObjectId } from "mongodb";


export const getClientes=async(req, res)=>{
    try {
        const database= await conexionBD();
        const collection=database.collection("clientes");
        //indicar la instrucción MQL
        const result=await collection.find({}).toArray();
        res.status(200).json(result); 
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
   
};
export const getCliente=async(req, res)=>{
    try {
        console.log(req.params);
        const {id}=req.params
        const database= await conexionBD();
        const collection=database.collection("clientes");
        //indicar la instrucción MQL
        const result=await collection.find({_id: new ObjectId(id)}).toArray();
        res.status(200).json(result[0]); //la  respuesta que devuelve el servidor
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
    
};
export const delCliente=async(req, res)=>{
    try {
        console.log(req.params);
        const {id}=req.params
        const database= await conexionBD();
        const collection=database.collection("clientes");
        //indicar la instrucción MQL
        const result=await collection.deleteOne({_id: new ObjectId(id)});
        console.log(result);
         if (result.deletedCount==0){
            return res.status(400).json({
                message:'no existe'
            })
         }else{
           return res.status(200).json({
              message:'ha sido borrado'
           })
        } //la  respuesta que devuelve el servidor
        
    
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
    

}
export const addCliente=async(req, res)=>{
    try {
        console.log(req.body);
        const {nameCliente, emailCliente, tlfnoCliente, empresaCliente}=req.body;

        //acceder a la BD
        const database= await conexionBD();
        const collection=database.collection("clientes");
        //indicar la instrucción MQL
        const result=await collection.insertOne({nameCliente, emailCliente, tlfnoCliente, empresaCliente})
        console.log({result});

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
    

}
export const updateCliente=async(req, res)=>{
    try {
        console.log(req.body);
        const {nameCliente, emailCliente, tlfnoCliente, empresaCliente}=req.body;
        const {id}=req.params;
    
        const database= await conexionBD();
        const collection=database.collection("clientes");
        //indicar la instrucción MQL
        const result=await collection.updateOne({_id: new ObjectId(id)},{$set: {nameCliente, emailCliente, tlfnoCliente, empresaCliente}})
    
         console.log(result);
         if (result.modifiedCount==0){
            return res.status(400).json({
                message:'no existe'
            })
         }else{
            return res.status(200).json({
                message:'ha sido actualilzado'
            })
         }
    
    } catch (error) {
        res.status(400).json({
            message:"no modificado"
        })
    }
   
  
}