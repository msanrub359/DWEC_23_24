import conexion from "../mysql_conector.js"

export const getClientes=async(req, res)=>{
    try {
        //throw new Error();
        const [result]=await conexion.query("SELECT * FROM clientes");
        console.log(result);
        res.status(200).json(result); 
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
   
};
export const getCliente=async(req, res)=>{
    try {
        console.log(req.params);
        const {id}=req.params
        const [result]=await conexion.query("SELECT * FROM clientes WHERE id=?", [id]);
        console.log(result[0]);
        res.status(200).json(result[0]); //la  respuesta que devuelve el servidor
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
    
};
export const delCliente=async(req, res)=>{
    try {
        const {id}=req.params
         const [result]=await conexion.query("DELETE FROM clientes WHERE id=?", [id]);
        console.log(result);
        if (result.affectedRows==0){
            return res.status(400).json({
                message:'no existe'
            })
        }else{
            return res.status(200).json({
                message:'ha sido borrado'
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
    

}
export const addCliente=async(req, res)=>{
    try {
        console.log(req.body);
        const {nameCliente, emailCliente, tlfnoCliente, empresaCliente}=req.body;

         const [result]=await conexion.query("INSERT INTO clientes (nameCliente, emailCliente, tlfnoCliente, empresaCliente) VALUES (?,?,?,?)", [nameCliente, emailCliente, tlfnoCliente, empresaCliente]);
         console.log(result);

    res.status(201).json({id:result.insertId});
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
    

}
export const updateCliente=async(req, res)=>{
    try {
        console.log(req.body);
        const {nameCliente, emailCliente, tlfnoCliente, empresaCliente}=req.body;
        const {id}=req.params;
    
        //  const [result]=await conexion.query("UPDATE clientes SET nameCliente=?, emailCliente=?, tlfnoCliente=?, empresaCliente=? WHERE id=?", [nameCliente, emailCliente, tlfnoCliente, empresaCliente, id]);
        const [result]=await conexion.query("UPDATE clientes SET nameCliente=IFNULL(?,nameCliente), emailCliente=IFNULL(?,emailCliente), tlfnoCliente=IFNULL(?,tlfnoCliente), empresaCliente=IFNULL(?, empresaCliente) WHERE id=?", [nameCliente, emailCliente, tlfnoCliente, empresaCliente, id]);
    
         console.log(result);
         if (result.affectedRows==0){
            return res.status(400).json({
                message:'no existe'
            })
         }else{
            return res.status(200).json({
                message:'ha sido actualilzado'
            })
         }
    
    } catch (error) {
        res.status(500).json({
            message:"Error en el servidor"
        })
    }
   
    //res.status(201).json({id:result.insertId});

}