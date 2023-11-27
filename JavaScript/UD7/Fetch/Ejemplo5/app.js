"use strict"
document.addEventListener("DOMContentLoaded", () => {
  
    document.querySelector("#cursos").addEventListener("change", mostrarAsig)

})

const mostrarAsig=()=>{
fetch("Ejemplo5.xml")
.then ( response =>{
    if (response.status==200){
        return response.text();
     }else{
        throw ("Error en la comunicación")
     }
})
.then (data=>{
    // $("#modulos option:gt(0)").remove();

    // $(data).find("curso").each((ind,ele)=>{
    //     if (ind== $("#cursos").prop("selectedIndex")-1){
    //         $(ele).find("asig").each((i, valor) =>{
    //             $("#modulos").append("<option>"+ $(valor).text()+ "</option>")

    //         })
    //     }
    // })
    // Swal.fire("Todo correcto")
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(data, "text/xml");
      
      //borrar todas las opciones excepto la primera
      const opciones = document.querySelector('#modulos').querySelectorAll('option:not(:first-child)');
      opciones.forEach(element => {
        element.remove();
      })
      //recorrer el documento
      xmlDoc.querySelectorAll("curso").forEach((element,index) => {
        if (index== document.querySelector("#cursos").selectedIndex-1){
           element.querySelectorAll("asig").forEach(mod => { //recorrer los módulos
            const option=document.createElement("option")
            option.textContent=mod.textContent
            document.querySelector("#modulos").appendChild(option)
           
           });
        }   
        
      });
    })     
.catch (error=>{
    console.log(error);
})

}