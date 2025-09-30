const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const numero = parseInt(document.getElementById("numero").value);
  resultado.innerHTML = ""; 

  if (numero < 1 || numero > 10 || isNaN(numero)) {
    resultado.innerHTML = "<p class='error'>El número debe estar entre 1 y 10.</p>";
    return;
  }

  let suma = 0;
  let tablaHTML = `<h3>Tabla de multiplicar del ${numero}</h3><ul>`;

  for (let i = 1; i <= 10; i++) {
    let producto = numero * i;
    tablaHTML += `<li>${numero} x ${i} = ${producto}</li>`;
    suma += producto;
  }

  tablaHTML += `</ul><p><strong>Suma total de los resultados:</strong> ${suma}</p>`;
  resultado.innerHTML = tablaHTML;
});
