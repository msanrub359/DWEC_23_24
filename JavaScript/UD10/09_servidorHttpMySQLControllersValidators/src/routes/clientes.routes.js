"use strict"
import {Router} from 'express'
import { getClientes,  getCliente, delCliente,addCliente, updateCliente } from '../controllers/clientes.controllers.js';

const router=Router();

router.get("/clientes", getClientes)
router.get("/clientes/:id", getCliente)
router.post("/clientes", addCliente);
router.put("/clientes/:id", updateCliente);
router.patch("/clientes/:id", updateCliente);
router.delete("/clientes/:id", delCliente )

export default router; //exportamos