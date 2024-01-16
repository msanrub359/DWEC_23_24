"use strict"
import{check, validationResult} from 'express-validator'
export const validacion =[
    check ('nameCliente').exists().notEmpty().isLength({min:5, max:40}).withMessage('El nombre del Cliente no puede estar vacío y debe tener una longitud entre 5 y 40 caracteres'),
    check ('tlfnoCliente').exists().notEmpty().isLength({min:9, max:9}).isNumeric().withMessage('El tlfno del cliente debe ser númerico y debe tener 12 caracteres'),
    check ('emailCliente').exists().isEmail().withMessage("El email debe tener formato de email "),
    check ('empresaCliente').exists().notEmpty().matches('/^[A-Z][a-zA-Z0-9\s]{4,49}$/').withMessage("El nombre de la empresa no puede contener caracteres especiales"),
    (req, res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        } else {
            // Puedes llamar a next() aquí si la validación es exitosa y quieres pasar al siguiente middleware
            next();
            
          }

    }
]
