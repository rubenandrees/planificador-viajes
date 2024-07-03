document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('itinerario-form');
    const listaItinerarios = document.getElementById('lista-itinerarios');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const destino = document.getElementById('destino').value;
        const fecha = document.getElementById('fecha').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Destino: ${destino}, Fecha: ${fecha}`;
        listaItinerarios.appendChild(listItem);

        form.reset();
    });

    // Aquí se podría agregar el código para experiencias de realidad aumentada
});