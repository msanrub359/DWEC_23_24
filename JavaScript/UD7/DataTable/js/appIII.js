"use strict";
 
document.addEventListener("DOMContentLoaded",()=>{
   mostrarTabla();


  
})


const mostrarTabla=()=>{
    let datos={
        perro:""
    }
    
    $(".table").DataTable({
       
            "ajax": {
                url: "php/mostrar.php",
                type: "GET",
                data: datos,
                dataType: "json"
            },
       
        
        columns: [
            {
                "defaultContent":'',
                orderable:false,
                className:'select-checkbox',
            },
            
            {
                "data": "chip",
                

            },
            {
                "data": "nombre"
            },
            {
                "data": "raza"
                
            },
            {
                "data": "fechaNac",
                orderable:false
            }
            
        ],
       
        
       
        "sPaginationType": "full_numbers", //muestra los botones de first y last
    
        // "select":true,
        // "select":{
        //     style:'multi'
        //   },
        //  "select":{
        //      items:'cell' //row
        //  },
        "select":{
            style:'os',
            selector:'td:first-child',
            style:'multi'
           
        },
        
        "language":{
            url:'/../../assets/librerias/DataTables/es-ES.json',
            select:{
                rows:{
                    _:'Ha seleccionado %d filas',
                    0:'Haga click en una fila para seleccionarla',
                    1:'solo 1 fila sleccionada'
                }
            }
        }
        
    })  
   
}