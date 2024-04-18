"use strict"

//instalar el paquete expres
/**
 * El paquete Express es el framework de backend más popular de node
 * Proporciona un conjunto de herramientas para aplicaciones web, peticiones y respuestas http,
 * enrutamiento y middleware para construir y desplegar aplicaciones a gran escala
 */

import express from 'express';
import routerCliente from './routes/clientes.routes.js'

import cors from 'cors';

import {PORT}  from './config.js'
//import './config.js'

const app=express(); //creado el objeto con la instacia de express
//configurar el puerto
//const PORT=3000;
//responder a los endpoint. Representa una acción de la API

//habilitar CORS
app.use(cors());
//middleware
app.use(express.json());


app.use(routerCliente)
//servidor a la escucha por el puerto 3000

//middlewarre, controlar si se pasa una ruta en la url
app.use((req, res)=>{
    res.status(404).json({
        message:"endpoint no encontrado"
    })
})
app.listen(PORT,()=>{
    console.log('escuchando solicitud');
})