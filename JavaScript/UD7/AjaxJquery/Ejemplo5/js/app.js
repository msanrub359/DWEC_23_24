
$(() => {
  
        $("#cursos").on("change", mostrarAsig)
    
})
function mostrarAsig(){
    $.ajax({
        url:"Ejemplo5.xml",
        type:"GET"
    })
    .done(function (responseText, textStatus, xhr){
        $("#modulos option:gt(0)").remove();
        $(responseText).find("curso").each((ind,ele)=>{
            if (ind== $("#cursos").prop("selectedIndex")-1){
                $(ele).find("asig").each((i, valor) =>{
                    $("#modulos").append("<option>"+ $(valor).text()+ "</option>")

                })
            }
        })
        
    })
    .fail(function (responseText, textStatus, xhr){
        Swal.fire({
            icon:"error",
            title:"Error "+ xhr.status,
            text:xhr.statusText
        })
    })
    
        
   
}