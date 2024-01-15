"use strict"
import {Router} from 'express';
import conexion from '../mysql_conector.js';

const router=Router();

router.get("/login", async(req, res)=>{
        // res.send("Respuesta servidor con express en la ruta login")
        const [result]=await conexion.query("SELECT 1 + 1 as Result");
        res.json(result[0]);
})

export default router; //exportamos