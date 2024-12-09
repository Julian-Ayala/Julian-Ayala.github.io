let respuestasCorrectas = 0;

function verificarRespuesta(preguntaNum, respuesta) {
    if (respuesta === 'no') {
        mostrarResultado(false);
        return;
    }

    if (respuesta === 'si') {
        respuestasCorrectas++;
    }

    if (preguntaNum === 1) {
        document.getElementById('pregunta1').style.display = 'none';
        document.getElementById('pregunta2').style.display = 'block';
    } else if (preguntaNum === 2) {
        document.getElementById('pregunta2').style.display = 'none';
        document.getElementById('pregunta3').style.display = 'block';
    } else if (preguntaNum === 3) {
        document.getElementById('pregunta3').style.display = 'none';
        mostrarResultado(true);
    }
}

function mostrarResultado(gano) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    if (gano && respuestasCorrectas === 3) {
        resultadoDiv.innerHTML = "¡Es el ganador!";
        resultadoDiv.style.backgroundColor = "yellow";
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.innerHTML = "¡Perdiste!";
        resultadoDiv.style.backgroundColor = "red";
        resultadoDiv.style.color = "black";
    }
}
