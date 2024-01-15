"use strict"

//instalar el paquete expres
/**
 * El paquete Express es el framework de backend más popular de node
 * Proporciona un conjunto de herramientas para aplicaciones web, peticiones y respuestas http,
 * enrutamiento y middleware para construir y desplegar aplicaciones a gran escala
 */

import express from 'express';

const app=express(); //creado el objeto con la instacia de express
//configurar el puerto
const PORT=3000;
//responder a los endpoint. Representa una acción de la API
app.get("/clientes", (req, res)=>{
    res.send("Obteniendo clientes")
});
app.post("/clientes", (req, res)=>{
    res.send("Creando clientes")
})
app.put("/clientes", (req, res)=>{
    res.send("Actualizando clientes")
})
app.delete("/clientes", (req, res)=>{
    res.send("Borrando clientes")
})
app.get("/login", (req, res)=>{
    res.send("Respuesta servidor con express en la ruta login")
})
//servidor a la escucha por el puerto 3000
app.listen(PORT,()=>{
    console.log('escuchando solicitud');
})