let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    amigoInput.value = ''; // Limpiar el campo de texto

    // Actualizar la lista en el HTML
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya al menos un nombre para sortear
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre para poder sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar el resultado anterior
    
    let p = document.createElement('p');
    p.textContent = `¡El amigo secreto es: ${amigoSorteado}! 🎉`;
    resultadoDiv.appendChild(p);
}