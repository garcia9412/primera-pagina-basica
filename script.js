// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Desplazamiento suave
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensaje de advertencia al intentar salir de la página
window.onbeforeunload = function () {
    return "¿Estás seguro de que quieres salir de la página?";
};
