"use strict"
import {Router} from 'express'
import { getClientes,  getCliente, delCliente,addCliente, updateCliente } from '../controllers/clientes.controllers.js';
import { validacion } from '../validators/clientes.validator.js';

const router=Router();

router.get("/clientes", getClientes)
router.get("/clientes/:id", getCliente)
router.post("/clientes", validacion, addCliente);
router.put("/clientes/:id", validacion,updateCliente);
router.patch("/clientes/:id", validacion,updateCliente);
router.delete("/clientes/:id", delCliente )

export default router; //exportamos