"use strict"
window.addEventListener("DOMContentLoaded", ()=>{
    mostrarProv();
})

const mostrarProv=() =>{
        axios.get("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
         .then(respuesta => {
            //ordenar ascedente
           
            respuesta.data.sort((a, b) => {
                return a.nm.localeCompare(b.nm)
            })
            //cargar en el select
            $(respuesta.data).each((ind, ele) => {
                $("#provincias").append("<option id=" + ele.id + ">" + ele.nm + "</option>")
            })

            //evento change
            $("#provincias").on("change", function () {

                Swal.fire("El Id es " + $("#provincias option:selected").attr("id"))
            })
          })
          .catch((error) => {
            console.error(error);
          });
        
      }
