"use strict"
$(() => {
  
    $("#cursos").on("change", mostrarAsig)

})

const mostrarAsig=()=>{
axios.get("Ejemplo5.xml")

.then (response=>{
    $("#modulos option:gt(0)").remove();
    $(response.data).find("curso").each((ind,ele)=>{
        if (ind== $("#cursos").prop("selectedIndex")-1){
            $(ele).find("asig").each((i, valor) =>{
                $("#modulos").append("<option>"+ $(valor).text()+ "</option>")

            })
        }
    })
   
})
.catch (error=>{
    console.error(error);
})

}