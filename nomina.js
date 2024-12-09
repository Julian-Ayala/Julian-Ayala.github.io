function calcularNomina() {
    let salarioBase = parseFloat(document.getElementById('salario').value);
    let horasExtraDiurna = parseInt(document.getElementById('horasExtraDiurna').value);
    let horasExtraNocturna = parseInt(document.getElementById('horasExtraNocturna').value);
    let horasExtraFestiva = parseInt(document.getElementById('horasExtraFestiva').value);
    let horasExtraDominical = parseInt(document.getElementById('horasExtraDominical').value);
    let diasFaltados = parseInt(document.getElementById('diasFaltados').value);

    const valorHora = salarioBase / (30 * 8); 

    const valorHorasExtraDiurna = horasExtraDiurna * (valorHora * 1.25); 
    const valorHorasExtraNocturna = horasExtraNocturna * (valorHora * 1.35);  
    const valorHorasExtraFestiva = horasExtraFestiva * (valorHora * 1.75);  
    const valorHorasExtraDominical = horasExtraDominical * (valorHora * 2);  

    let totalHorasExtras = valorHorasExtraDiurna + valorHorasExtraNocturna + valorHorasExtraFestiva + valorHorasExtraDominical;
    
    let descuentoPorFaltas = (salarioBase / 30) * diasFaltados;

    let descuentoSalud = salarioBase * 0.04;
    let descuentoPension = salarioBase * 0.04;

    let salarioTotal = salarioBase + totalHorasExtras - descuentoPorFaltas - descuentoSalud - descuentoPension;

    let resultadoDiv = document.getElementById('resultado');
    let contenido = document.getElementById('resultado-contenido');

    contenido.innerHTML = `
      <p>Salario Básico: $${salarioBase.toLocaleString()}</p>
      <p>Ingresos por Horas Extras:</p>
      <ul>
        <li>Horas Extra Diurna: $${valorHorasExtraDiurna.toLocaleString()}</li>
        <li>Horas Extra Nocturna: $${valorHorasExtraNocturna.toLocaleString()}</li>
        <li>Horas Extra Festiva: $${valorHorasExtraFestiva.toLocaleString()}</li>
        <li>Horas Extra Dominical: $${valorHorasExtraDominical.toLocaleString()}</li>
      </ul>
      <p>Descuento por Faltas: -$${descuentoPorFaltas.toLocaleString()}</p>
      <p>Descuento por Salud: -$${descuentoSalud.toLocaleString()}</p>
      <p>Descuento por Pensión: -$${descuentoPension.toLocaleString()}</p>
      <p><strong>Total a Pagar: $${salarioTotal.toLocaleString()}</strong></p>
    `;

    resultadoDiv.style.backgroundColor = "#007bff";
    contenido.querySelector('p:nth-child(6)').style.color = 'red';

    resultadoDiv.classList.remove('oculto');
}
