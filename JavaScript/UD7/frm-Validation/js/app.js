"use strict";

window.addEventListener("DOMContentLoaded", () => {
  
  confFormulario()
  activarCaptcha();
});
const confFormulario = () => {
  /**
   * Crear una nueva restricción al formulario
   */
  $.validator.addMethod("regex", function (value, element, regexp) {
    const re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  });
  $("#frmFirst").validate({
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
      nombre: {
        required: true,
        regex: /^[A-ZÁ-Ú][A-Za-z\sñá-úÁ-Ú]{4,35}$/,
      },
      edad: {
        required: true,
        maxlength: 3,
        number: true,
        min: 18,
      },
      fecha: {
        required: true,
        date: true,
      },

      tipo: "required",
      provincia: "required",
    },
    
    messages: {
      nombre: {
        required: "El nombre del usuario debe estar rellenado",
        regex: "Formato del campo erróneo",
      },
    },
    submitHandler: (form) => {
      enviar();
    },
  });
};
const activarCaptcha = () => {
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LfVXr8UAAAAAMS-4Ar9OHK7RLug-6H6n_qxwo1L", { action: "submit" })
      .then(function (token) {
        console.log({ token });
        document.getElementById("recaptcha").value = token;
      });
  });
};
const enviar = () => {
  
   const spinner = document.getElementById("spinner");
  const exito = document.getElementById("exito");
  //visible
  spinner.style.display = "block";
  exito.innerText = "Datos enviados";
  setTimeout(() => {
    spinner.style.display = "none";
    exito.innerText = "";
    limpiar();
  }, 3000);

  
};
const limpiar = () => {
  const inputText = document.getElementsByName("texto");
  const spanErrores = document.getElementsByName("error");
  const radios = document.getElementsByName("tipo");
  //limpiar los inputs
  inputText.forEach((elemento) => {
    elemento.value = "";
  });
  //limpiar los errores
  spanErrores.forEach((elemento) => {
    elemento.innerText = "";
  });
  //limpiar los checked
  radios.forEach((elemento) => {
    elemento.checked = false;
  });
  //establecer el foco en el input de nombre
  document.getElementById("nombre").focus();
};
