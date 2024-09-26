document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtiene los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Muestra un mensaje de confirmación
    const responseDiv = document.getElementById('form-response');
    responseDiv.style.display = 'block';
    responseDiv.innerHTML = `<p>Gracias, ${name}. Tu mensaje ha sido enviado.</p>`;

    // Limpia el formulario
    this.reset();
});
