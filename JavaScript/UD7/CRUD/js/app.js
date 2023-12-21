import { addCliente } from "./API.js";
import { mensaje } from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
  confFormulario();
  document.querySelector(".addCliente").addEventListener("click",()=>{
    //llamar a la ventana modal
    $("#frmModal").modal("show")
  })

});
const confFormulario = () => {
  $(".frmClientes").validate({
    errorElement: "em",
    errorPlacement: function (error, element) {
      // Add the `help-block` class to the error element
      error.addClass("invalid-feedback");

      if (element.prop("type") === "radio") {
        error.insertAfter(element.parent("div"));
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    rules: {
      nameCliente: "required",

      emailCliente: {
        required: true,
        email: true,
      },
      tlfnoCliente: {
        required: true,
        minlength: 9,
      },

      empresaCliente: "required",
    },

    submitHandler: (form) => {
      add(); //añadir cliente
      
      
    },
  });
};
const add=async()=>{
  //recoger los datos del formulario en formato urlencoded
  const cliente=$(".frmClientes").serialize();
  console.log(cliente);
  //llamar la API de addCliente
  const data= await addCliente(cliente);

  //limpiar formulario
  $("input").val("");
  //cerrar el formulario 
  $("#frmModal").modal("hide");
  //mostrar el mensaje
  if (data.mensaje =="insertado"){
    mensaje ("Cliente grabado", "success");
    mostrarClientes();
  }else{
    mensaje ("Cliente NO grabado", "error");
  }
  
}

const mostrarClientes=()=>{

}
