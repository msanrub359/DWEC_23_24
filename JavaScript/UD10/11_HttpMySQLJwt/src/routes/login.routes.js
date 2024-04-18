"use strict"
import {Router} from 'express';
import conexion from '../mysql_conector.js';
import { postLogin } from '../controllers/login.controllers.js';


const router=Router();

router.post("/login", postLogin)

export default router; //exportamos