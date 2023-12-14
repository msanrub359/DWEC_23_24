"use strict";

document.addEventListener("DOMContentLoaded", () => {
  confFormulario()
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

      
      
    },
  });
};

