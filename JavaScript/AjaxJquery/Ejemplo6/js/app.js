
$(() => {
   
        $("#regiones").on("change", mostrarProv)
    
})
function mostrarProv(){
    $.ajax({
        url:"Ejemplo6.php",
        type:"POST",
        data:{
            ca: $("#regiones").val()
        },
        dataType:"json"
    })
    .done(function (responseText){
        let cadena="";
            //borrar contenido de capa
            //$("#mostrar").empty();
            $(responseText).each((ind,ele)=>{
                cadena+=ele+"<br>";
            });
            $("#mostrar").html(cadena);
        
    })
    .fail(function (responseText, textStatus, xhr){
        Swal.fire({
            icon:"error",
            title:"Error "+ xhr.status,
            text:xhr.statusText
        })
    })
    
}