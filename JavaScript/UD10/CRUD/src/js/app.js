"use strict";
import { addClientes, getClientes, deleteCliente, getCliente, updateCliente } from "./API.js";
import { mensaje } from "./funciones.js";

let id;
document.addEventListener("DOMContentLoaded", () => {
  confFormulario();
  mostrarClientes();
  document.querySelector('.addCliente').addEventListener("click", ()=>{
    //modificar el texto del título y botón
 document.querySelector(".modal-title").innerText="Añadir Cliente";
 document.querySelector(".submit").innerText="Añadir"
    
    //llamar a la ventana modal de boostrap
    $("#frmModal").modal("show");
  });
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

      if (document.querySelector(".submit").innerText==="Añadir"){
        add();
      }else{
        modificarCliente()
      }
      
    },
  });
};

const add=async()=>{
  //recoger los datos en jquery
  const cliente={
    nameCliente:document.querySelector("#nameCliente").value,
    emailCliente:document.querySelector("#emailCliente").value,
    tlfnoCliente:document.querySelector("#tlfnoCliente").value,
    empresaCliente:document.querySelector("#empresaCliente").value,
  }
  //const cliente=$(".frmClientes").serialize();
  console.log(cliente);
  const datos= await addClientes(cliente);
  // console.log(datos.data);
  // console.log(datos.error);
  //borrar datos del formulario
  $("input").val("");
  //cerrar el formulario
  $("#frmModal").modal("hide");
  console.log(datos.mensaje)
  if (datos.mensaje == "Insertado"){
    mensaje("Cliente grabado", "success");
    mostrarClientes();
  }else{
    mensaje("Cliente no grabado", "error");
  }
  
  
}

const mostrarClientes=async()=>{
  const botAcc = `<button type='button' class='edit btn btn-success'><i class="fa-solid fa-pen-to-square"></i></button><button type='buttom' class='del btn btn-danger ms-2'><i class="fa-solid fa-trash"></i></button>`;
  const clientes=await getClientes()
  //borrar tbody
  $('.table tbody').empty();
  if(clientes.data.length>0){ //cargar clientes
    clientes.data.forEach(cliente => {
      $(".table tbody").append(
        `<tr><td>${cliente.id}</td><td>${cliente.nameCliente}</td><td>${cliente.emailCliente}</td><td>${cliente.tlfnoCliente}</td><td>${cliente.empresaCliente}</td><td>${botAcc}</td></tr>`
      );
    });
    //establecer eventos a los botones editar y eliminar
    $(".edit").on("click", editarCliente);
    $(".del").on("click", borrarCliente);


  }else {
    $(".table tbody").append(
      `<tr><td colspan=6 class='text-center'>No hay registros</td></td></tr>`
    );
  }

}

const borrarCliente=function(){
  const id=this.parentNode.parentNode.firstChild.innerText;
  Swal.fire({
    title: '¿Desea eliminar el cliente?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'No eliminar',
    focusCancel:true
  }).then(async result => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      
      const texto=await deleteCliente(id);
      
      
      mensaje(`Cliente ${texto.mensaje}`, 'warning')
       
       mostrarClientes()
     
     
      
    } else if (result.isDimissed) {
      mensaje(`Cliente ${texto.mensaje}`, 'warning')
    }
  })
}

const editarCliente=async function(){
  //recoger los datos del formulario
   id=this.parentNode.parentNode.firstChild.innerText;
  const data= await getCliente(id);
  
  //cargar los datos en el formulario
 document.querySelector('#nameCliente').value=data.nameCliente;
 document.querySelector('#emailCliente').value=data.emailCliente;
 document.querySelector('#tlfnoCliente').value=data.tlfnoCliente;
 document.querySelector('#empresaCliente').value=data.empresaCliente;
 
 //modificar el texto del título y botón
 document.querySelector(".modal-title").innerText="Modificar Cliente";
 document.querySelector(".submit").innerText="Modificar"
 
 //llamar al formulario
  $("#frmModal").modal("show");
}

const modificarCliente=async()=>{
  //recoger los datos en jquery
  const cliente={
    nameCliente:document.querySelector("#nameCliente").value,
    emailCliente:document.querySelector("#emailCliente").value,
    tlfnoCliente:document.querySelector("#tlfnoCliente").value,
    empresaCliente:document.querySelector("#empresaCliente").value,
    
  }
   console.log(cliente);
   const data= await updateCliente(cliente, id);
   mensaje(`Cliente ${data.mensaje}`, 'warning')
  //borrar datos del formulario
  $("input").val("");
  //cerrar el formulario
  $("#frmModal").modal("hide");
  
    mostrarClientes();
  
  
  
}
