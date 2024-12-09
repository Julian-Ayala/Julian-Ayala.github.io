let perros = {
    pitbull: 6000000,
    buly: 6500000,
    rottwhiler: 4000000,
    labrador: 3500000,
    golden: 3500000,
    doberman: 5000000,
    dogo: 5500000
};

function calcularNuevoValor(raza, puesto) {
    let valor = perros[raza.toLowerCase()];
    let nuevoValor;

    if (puesto === 1) {
        nuevoValor = valor * 2; 
    } else if (puesto === 2) {
        nuevoValor = valor + 800000; 
    } else if (puesto === 3) {
        nuevoValor = valor + 200000; 
    } else {
        nuevoValor = valor; 
    }

    return nuevoValor;
}

function mostrarResultados() {
    let raza1 = document.getElementById('raza1').value;
    let puesto1 = parseInt(document.getElementById('puesto1').value);
    let raza2 = document.getElementById('raza2').value;
    let puesto2 = parseInt(document.getElementById('puesto2').value);
    let raza3 = document.getElementById('raza3').value;
    let puesto3 = parseInt(document.getElementById('puesto3').value);

    let nuevoValor1 = calcularNuevoValor(raza1, puesto1);
    let nuevoValor2 = calcularNuevoValor(raza2, puesto2);
    let nuevoValor3 = calcularNuevoValor(raza3, puesto3);

    document.getElementById('resultado1').innerText = `Nuevo valor de ${raza1}: $${nuevoValor1}`;
    document.getElementById('resultado2').innerText = `Nuevo valor de ${raza2}: $${nuevoValor2}`;
    document.getElementById('resultado3').innerText = `Nuevo valor de ${raza3}: $${nuevoValor3}`;
}
