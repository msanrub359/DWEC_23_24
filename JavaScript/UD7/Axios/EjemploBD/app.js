"use strict"
$(() => {
   
        $("#first, #all").on("click", mostrar);
   
})
function mostrar() {
    const param={
        params:{
            perro:''
        }
        
    };

    if ($(this).attr("id") == "first") {
        param.params.perro="111A";
    } 
    
    
    axios.get("php/mostrar.php",param)
    .then(response => {
      
       $("tbody").empty();
       
           $(response.data.data).each((ind, ele) => {
               $("tbody").append(`<tr><td>${ele.chip}</td><td>${ele.nombre}</td><td>${ele.raza}</td><td>${ele.fechaNac}</td></tr>`)
           })
       
     })
     .catch((error) => {
       console.error(error);
     });
    

}