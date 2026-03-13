function buscarEdicto() {
    const filtro = document.getElementById('inputBusqueda').value.toUpperCase();
    const resultadoMsg = document.getElementById('resultadoBusqueda');
    const parrafos = document.querySelectorAll('article.noticia p');
    let encontrado = false;

    parrafos.forEach(p => {
        p.style.backgroundColor = "transparent";
        p.style.border = "none";
    });

    if (filtro === "") {
        resultadoMsg.style.color = "red";
        resultadoMsg.innerText = "Ingresá un nombre o juzgado.";
        return;
    }

    for (let i = 0; i < parrafos.length; i++) {
        const texto = parrafos[i].innerText || parrafos[i].textContent;
        if (texto.toUpperCase().indexOf(filtro) > -1) {
            parrafos[i].style.backgroundColor = "#ffffcc";
            parrafos[i].style.borderLeft = "5px solid #004080";
            parrafos[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            resultadoMsg.style.color = "green";
            resultadoMsg.innerText = "¡Encontrado!";
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        resultadoMsg.style.color = "orange";
        resultadoMsg.innerText = "No se encontró nada.";
    }
}

// Escuchar eventos de forma segura (sin inline handlers)
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('btnBuscar');
    const input = document.getElementById('inputBusqueda');

    if(boton) {
        boton.addEventListener('click', buscarEdicto);
    }
    if(input) {
        input.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') buscarEdicto();
        });
    }
});
