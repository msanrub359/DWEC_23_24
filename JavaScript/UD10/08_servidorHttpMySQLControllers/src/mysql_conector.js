"use strict"

//importar el paquete mysql para realizar la conexión

import {createPool} from "mysql2/promise"; //para trabajar con promesas

const conexion=createPool(
    { //establecer las características de la conexión
        "host":"localhost",
        "user": "root",
        "password":"",
        "database":"empresadb",
        "port":"3306"

    }
)

export default conexion;