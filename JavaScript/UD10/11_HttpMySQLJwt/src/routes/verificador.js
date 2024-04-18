import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

const verificador=((req,res,next)=>{
    //obtener el token del encabezado de la petición
    let token=req.headers['x-access-token']|| req.headers['authorization'];
    if (token){
        //extraer el token
        token=token.split(" ")[1];
        console.log(token);
        //verificar que el token es correcto, utilizando la palabra clave
        jwt.verify(token,SECRET, (error, decode)=>{
            if (error){ //Si hay error en la verificación
                res.status(400).json({
                    mensaje:"El token no es válido"
                })
            }else{
                //asignar la información decodificada en el parámetro decode
                req.decode=decode
                next();
            }
        })

    }else{
        res.status(401).json({
            mensaje:"Es necesario un token de autenticación"
        })
    }
})
export default verificador;
