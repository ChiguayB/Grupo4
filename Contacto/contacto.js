document.addEventListener('DOMContentLoaded', function() {


    const constraints = {
        nombre_completo: {
            presence: {
                message: 'es requerido'
              },
              
              length: {
                minimum: 3,
                message: 'El nombre completo debe tener al menos 3 caracteres'
              }
        },
        checkbox1: {
          inclusion: {
            within: [true, false],
            message: "es requerido"
          }
        },
        checkbox2: {
          inclusion: {
            within: [true, false],
            message: "seleccione una opción"
          }
        },
        nombre_empresa: {
          presence: true
        },
        email: {
            presence: true,
            email: {
                message: 'Ingrese una dirección de correo electrónico válida'
            }
        },
        telefono: {
          presence: true,
          format: {
            pattern: "[0-9]+",
            message: "solo se permiten números"
          }
        },
        razon_consulta: {
          presence: true
        }
      };
    
      const form = document.getElementById('mi-formulario');
    
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const values = {
            nombre_completo: form.querySelector('#nombre_completo').value,
            nombre_completo: form.querySelector('#email').value,
            // Agregar el resto de los campos del formulario
          };
        const errors = validate(values, constraints);
        if (errors) {
          handleErrors(errors);
        } else {
          handleSuccess();
        }
      });
    
      function handleErrors(errors) {
        const errorList = document.getElementById('error-list');
        errorList.innerHTML = '';
        for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
            const error = errors[key];
            const li = document.createElement('li');
            li.textContent = `${key} ${error}`;
            errorList.appendChild(li);
          }
        }
      }
    
      function handleSuccess() {
        alert('El formulario ha sido enviado con éxito.');
      }
  });

