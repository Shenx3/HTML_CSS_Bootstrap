// assets/js/funciones.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form-section form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío predeterminado del formulario

            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Limpiar mensajes de error previos
            clearErrorMessages();

            // Validar campo Nombre
            const nameValue = nameInput.value.trim();
            const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
            
            if (nameValue === '') {
                displayErrorMessage(nameInput, 'El nombre es obligatorio.');
                isValid = false;
            } else if (!nameRegex.test(nameValue)) {
                displayErrorMessage(nameInput, 'El nombre solo puede contener letras y espacios.');
                isValid = false;
            } else if (nameValue.length < 2) {
                displayErrorMessage(nameInput, 'El nombre debe tener al menos 2 caracteres.');
                isValid = false;
            }


            // Validar campo Email
            if (emailInput.value.trim() === '') {
                displayErrorMessage(emailInput, 'El email es obligatorio.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayErrorMessage(emailInput, 'Por favor, introduce un email válido.');
                isValid = false;
            }

            // Validar campo Mensaje
            if (messageInput.value.trim() === '') {
                displayErrorMessage(messageInput, 'El mensaje es obligatorio.');
                isValid = false;
            }

            if (isValid) {
                alert('Formulario enviado con éxito!');
                contactForm.reset(); // Opcional: resetear el formulario después del envío
            }
        });
    }

    function displayErrorMessage(inputElement, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-danger mt-1';
        errorDiv.textContent = message;
        inputElement.parentNode.appendChild(errorDiv);
        inputElement.classList.add('is-invalid'); // Añadir clase de Bootstrap para indicar error
    }

    function clearErrorMessages() {
        document.querySelectorAll('.text-danger').forEach(el => el.remove());
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    }

    function isValidEmail(email) {
        // Expresión regular para validar email (similar a la del PDF)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
