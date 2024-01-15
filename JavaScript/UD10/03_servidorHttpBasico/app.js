"use strict"

//configurar el servidor http
import http from 'http';

//crear el servidor
const server=http.createServer((req, res)=>{ //indicar los parámetros de petición y respuesta
    res.end('Estoy respondiendo a tu solicitud v3')
})

//configurar el puerto
const PORT=3000;
//servidor a la escucha por el puerto 3000
server.listen(PORT,()=>{
    console.log('escuchando solicitud');
})