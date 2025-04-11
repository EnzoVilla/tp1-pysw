document.addEventListener('DOMContentLoaded', function() {
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150; // Ajusta este valor según cuándo quieres que aparezca el elemento

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                // Opcional: Remover la clase si el elemento vuelve a estar fuera de la vista
                reveal.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealElements);

    // Ejecutar una vez al cargar la página para los elementos que ya están en la vista
    revealElements();
});