"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarTabla();
    
})
const mostrarTabla=async()=>{
   
       $('.table').DataTable({
        'ajax':{
           url:'../AjaxJquery/EjemploBD/php/mostrar.php',
           type:'GET',
           data:{
            perro:''
           },
           dataType:'json'
        },
        columns:[{
            data: "chip"
        },
        {
            data: "nombre"
        },
        {
            data: "raza"
        },
        {
            data: "fechaNac"
        }
        ],
        'language':{
            url:'../assets/librerias/DataTables/es-Es.json'
        },
        'sPaginationType':'full_numbers', //muestra los botones First y last
       
        'select':true
        
        
    });
    
    
}