function calcularAlquiler() {
    let cliente = document.getElementById('cliente').value;
    let modelo = document.getElementById('modelo').value;
    let dias = parseInt(document.getElementById('dias').value);
    let seguro = document.getElementById('seguro').checked;

    let precios = {
        "BMW": { precio: 650000, color: "blue", imagen: "bmw.jpg" },
        "MEGANE": { precio: 120000, color: "red", imagen: "megane.jpg" },
        "MERCEDES": { precio: 700000, color: "black", imagen: "mercedes.jpg" },
        "TWINGO": { precio: 100000, color: "green", imagen: "twingo.jpg" },
        "CHEVROLET AVEO": { precio: 150000, color: "gray", imagen: "aveo.jpg" }
    };

    if (!precios[modelo]) {
        alert("Por favor, seleccione un modelo válido.");
        return;
    }

    let precioBase = precios[modelo].precio * dias;
    let descuento = 0;
    if (dias >= 3 && dias <= 5) {
        descuento = 0.10;
    } else if (dias >= 6 && dias <= 10) {
        descuento = 0.15;
    } else if (dias > 10) {
        descuento = 0.20;
    }
    let valorDescuento = precioBase * descuento;
    let incrementoSeguro = seguro ? precioBase * 0.05 : 0;
    let precioTotal = precioBase - valorDescuento + incrementoSeguro;

    let resultadoDiv = document.getElementById('resultado');
    let contenido = document.getElementById('resultado-contenido');

    let fondo = "orange";
    if (dias >= 3 && dias <= 5) fondo = "yellow";
    else if (dias >= 6 && dias <= 10) fondo = "green";
    else if (dias > 10) fondo = "blue";

    contenido.innerHTML = `
      <p>Cliente: ${cliente}</p>
      <p>Modelo: ${modelo}</p>
      <p>Días: ${dias}</p>
      <p>Precio Base: $${precioBase.toLocaleString()}</p>
      <p>Descuento: -$${valorDescuento.toLocaleString()} (${(descuento * 100)}%)</p>
      <p>Seguro: +$${incrementoSeguro.toLocaleString()} (${seguro ? 'Sí' : 'No'})</p>
      <p>Total a Pagar: $${precioTotal.toLocaleString()}</p>
      <img src="images/${precios[modelo].imagen}" alt="${modelo}">
    `;
    resultadoDiv.style.backgroundColor = fondo;
    resultadoDiv.classList.remove('oculto');
}
