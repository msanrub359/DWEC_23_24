"use strict";
import { addCliente, deleteCliente, getClientes, getCliente, updateCliente } from "./API.js";
import { mensaje } from "./funciones.js";
let id;
document.addEventListener("DOMContentLoaded", () => {
  confFormulario(); //configurar formulario con restricciones
  mostrarClientes(); //cargar clientes en la tabla
  document.querySelector(".addCliente").addEventListener("click", () => {
    //llamar a la ventana modal
  //modificar los textos
 document.querySelector(".modal-title").innerText="Añadir Cliente";
 document.querySelector(".submit").innerText="Insertar";

    $("#frmModal").modal("show");
  });
 $("#frmModal").on("hidden.bs.modal",()=>{
    $("input").val("");
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
      if(document.querySelector(".submit").innerText=="Insertar"){
        add(); //añadir cliente
      }else{
        grabarActCliente();//actualizar cliente
      }
     
    },
  });
};
const add = async () => {
  //recoger los datos del formulario en formato urlencoded
  const cliente = $(".frmClientes").serialize();
  console.log(cliente);
  //llamar la API de addCliente
  const data = await addCliente(cliente);

  //limpiar formulario
  $("input").val("");
  //cerrar el formulario
  $("#frmModal").modal("hide");
  //mostrar el mensaje
  if (data.mensaje == "insertado") {
    mensaje("Cliente grabado", "success");
    mostrarClientes();
  } else {
    mensaje("Cliente NO grabado", "error");
  }
};
const mostrarClientes = async () => {
  const botAcc = `<button type='button' class='edit btn btn-success'><i class="fa-regular fa-pen-to-square"></i></button><button type='button' class='del btn btn-danger ms-2'><i class="fa-solid fa-trash"></i></button>`;
  //vaciar la tabla
  $(".table tbody").empty();
  //cargar los clientes
  const clientes = await getClientes();
  console.log(clientes);
  if (clientes.data.length > 0) {
    //cargar los clientes en la tabla
    clientes.data.forEach((cliente) => {
      $(".table tbody").append(
        `<tr><td>${cliente.id}</td><td>${cliente.nameCliente}</td><td>${cliente.emailCliente}</td><td>${cliente.tlfnoCliente}</td><td>${cliente.empresaCliente}</td><td>${botAcc}</td></tr>`
      );
    });
    //establecer evento click a los botones de acción
    $(".del").on("click", eliminarCliente);
    $(".edit").on("click", actualizarCliente);
  } else {
    $(".table tbody").append(
      `<tr><td colspan=6 class="text-center">No hay registros</td></tr>`);
  }
};
const eliminarCliente =function()  {
  const id=this.parentNode.parentNode.firstChild.innerText;
  console.log(id);
  Swal.fire({
    title: "¿Desea eliminar el cliente?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    focusCancel:true
  }).then(async(result) => {
    if (result.isConfirmed) {
      const datos=await deleteCliente(id);
      mensaje(`Cliente borrado`, 'success');
      mostrarClientes();
    }
  });
};
const actualizarCliente =async function()  {
   id=this.parentNode.parentNode.firstChild.innerText;
  //cargar los datos del cliente
  const datos= await getCliente(id);
  //mostrar la ventana modal
  $("#frmModal").modal("show");
  //cargar los datos en el formulario
  document.querySelector("#nameCliente").value=datos.nameCliente;
  document.querySelector("#emailCliente").value=datos.emailCliente;
  document.querySelector("#tlfnoCliente").value=datos.tlfnoCliente;
  document.querySelector("#empresaCliente").value=datos.empresaCliente;
//modificar los textos
  document.querySelector(".modal-title").innerText="Modificar Cliente";
  document.querySelector(".submit").innerText="Modificar";
};


const grabarActCliente=async ()=>{
  const cliente={
    'id':id,
    'nameCliente':document.querySelector("#nameCliente").value,
    'emailCliente':document.querySelector("#emailCliente").value,
    'tlfnoCliente':document.querySelector("#tlfnoCliente").value,
    'empresaCliente': document.querySelector("#empresaCliente").value
   }
   
   const datos= await updateCliente(cliente);
   //mostrar el mensaje
   if (datos.mensaje=="actualizado"){
    mensaje("Cliente actualizado", "success");
    mostrarClientes();
   }else{
    mensaje("Cliente No actualizado", "error");
   }
   //limpiar y cerrar formulario
   $("input").val("");
   $("#frmModal").modal("hide");

   

};
