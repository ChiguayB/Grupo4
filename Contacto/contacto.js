
//nav:

function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("nav")
    var z = document.getElementById("hambur-off")
    
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.className = "fixed-top menu-desktop"
      z.className = "hambur-active"

    } else {
      x.style.display = "flex";
      y.className = "menu-mobile"
      z.className = "hambur-off"
    }

  }

//Finaliza nav

const empresa = document.querySelector("#empresa")
const botonNo = document.querySelector("#checkbox2")
const botonSi = document.querySelector("#checkbox1")

function Mostrar(){
    $("#empresa").show()
    if ($("#checkbox2").value != false) {$("#checkbox2").value = false}
}

function Ocultar(){
    $("#empresa").hide();
    if ($("#checkbox1").value !=false) { $("#checkbox1").value = false
        
    }
}

document.addEventListener('DOMContentLoaded', function() {

// Definir las reglas de validación
const reglas = {
  nombre: {
    presence: true,
    length: {
      minimum: 3,
      maximum: 20,
      tooShort: "debe tener al menos %{count} caracteres",
      tooLong: "debe tener menos de %{count} caracteres"
    }
  },
  email: {
    presence: true,
    email: true
  }
};

// Obtener el formulario
const formulario = document.getElementById('mi-formulario');

// Agregar un listener al evento submit del formulario
$("#enviar").on("click",function(event){
    event.preventDefault();
  
  // Obtener los valores del formulario
  const datos = {
    nombre: formulario.elements.nombre.value,
    email: formulario.elements.email.value
  };
  
  // Validar los datos usando Validate.js
  const errores = validate(datos, reglas);
  
  // Si hay errores, mostrarlos
  if (errores) {
    // Borrar los errores previos
    const erroresAnteriores = document.querySelectorAll('.error');
    erroresAnteriores.forEach(error => error.remove());
    
    // Mostrar los nuevos errores
    Object.keys(errores).forEach(nombreCampo => {
      const input = formulario.elements[nombreCampo];
      const error = document.createElement('div');
      error.className = 'error';
      error.innerHTML = errores[nombreCampo][0];
      input.parentNode.insertBefore(error, input.nextSibling);
    });
  } else {
    // Si no hay errores, enviar el formulario
    formulario.submit();
  }
});

  });

