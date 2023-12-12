"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarTabla();
    // document.querySelector(".recargar").addEventListener('click', ()=>{
    //     mostrarTabla();
    // })
})
const mostrarTabla=async()=>{
    //fetch
    try {
       const response=await fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json");
       const data=await response.json();
       //rellenar la tabla
       data.forEach(element => {
            //crear las filas
            console.log(element);
            $('.table tbody').append(`<tr><td>${element.id}</td><td>${element.nm}</td></tr>`)
       });
       //establecer la selección de filas
       $('.table tbody tr').on('click', function(){
        $(this).toggleClass("selected");
    })
    //configurar la tabla con la librería dataTable
       $('.table').DataTable({
        'language':{
            url:'../assets/librerias/DataTables/es-Es.json'
        },
        'columnDefs':[
            {
                "className": "dt-center", "targets":"_all"
         }
        ],
        'sPaginationType':'full_numbers', //muestra los botones First y last
        //'bDestroy' :true,
        
    });
    
    } catch (error) {
        console.log(error);
    }
}