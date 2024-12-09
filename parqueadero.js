function calcularPagoEstacionamiento() {
    let horas = parseInt(document.getElementById("horas").value);
    let minutos = parseInt(document.getElementById("minutos").value);

    if (minutos > 0) {
        horas += 1;
    }

    let total = horas * 1500;

    document.getElementById("total").textContent = "Total a pagar: $" + total;
}
