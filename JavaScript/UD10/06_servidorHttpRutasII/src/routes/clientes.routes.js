"use strict"
import {Router} from 'express'

const router=Router();

router.get("/clientes", (req, res)=>{
    res.send("Obteniendo clientes")
});
router.post("/clientes", (req, res)=>{
    res.send("Creando clientes")
})
router.put("/clientes", (req, res)=>{
    res.send("Actualizando clientes")
})
router.delete("/clientes", (req, res)=>{
    res.send("Borrando clientes")
})

export default router; //exportamos