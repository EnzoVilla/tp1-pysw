document.addEventListener('DOMContentLoaded', function() {
    const mensualRadio = document.getElementById('mensual');
    const anualRadio = document.getElementById('anual');
    const planes = document.querySelectorAll('.plan');

    function actualizarPrecios() {
        planes.forEach(plan => {
            const mensualPrice = plan.querySelector('.mensual-price');
            const anualPrice = plan.querySelector('.anual-price');

            if (mensualRadio.checked) {
                mensualPrice.style.display = 'block';
                anualPrice.style.display = 'none';
            } else if (anualRadio.checked) {
                mensualPrice.style.display = 'none';
                anualPrice.style.display = 'block';
            }
        });
    }

    // Llama a la función inicialmente para establecer el estado correcto al cargar la página
    actualizarPrecios();

    // Agrega event listeners a los radio buttons para actualizar los precios al cambiar la selección
    mensualRadio.addEventListener('change', actualizarPrecios);
    anualRadio.addEventListener('change', actualizarPrecios);
});