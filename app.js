let nombres = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    if (!inputNombre || !listaAmigos) {
        console.error("Elementos no encontrados. Verifica los IDs en index.html");
        return;
    }

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = "";
    inputNombre.focus();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un solo ganador
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (!resultado) {
        console.error("Elemento 'resultado' no encontrado. Verifica el ID en index.html");
        return;
    }

    if (nombres.length < 2) {
        alert("Debe haber al menos dos nombres para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    resultado.textContent = `🎉 El amigo secreto es: ${nombres[indiceAleatorio]} 🎉`;
}

