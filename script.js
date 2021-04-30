const selectTInicial = document.querySelector("#temperatura-inicial").value;
const selectTFinal = document.querySelector("#select-temperatura-final").value;
const valorTInicial = document.querySelector("#valor-1").value;
const btnCalcular = document.querySelector("#calcular");

cargarEventListeners();

function cargarEventListeners() {
  btnCalcular.addEventListener("submit", calcularValor);
}

function calcularValor(e) {
  e.preventDefault();
  const selectTInicial = document.querySelector("#temperatura-inicial").value;
  let valorTInicial = document.querySelector("#valor-1").value;
  const selectTFinal = document.querySelector("#select-temperatura-final")
    .value;

  //de celsius a todas las escalas

  if (selectTInicial === "" || valorTInicial === "" || selectTFinal === "") {
    mensajeError("Todos los campos son obligatorios");
    return;
  }

  if (selectTInicial === "celsius" && selectTFinal === "farenheit") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "celsius" && selectTFinal === "kelvin") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "celsius" && selectTFinal === "rankine") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "celsius" && selectTFinal === "celsius") {
    crearVerde();
    return valorTInicial;
  }

  //de farenheit a todas las escalas

  if (selectTInicial === "farenheit" && selectTFinal === "celsius") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "farenheit" && selectTFinal === "rankine") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "farenheit" && selectTFinal === "kelvin") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "farenheit" && selectTFinal === "farenheit") {
    crearVerde();
    return valorTInicial;
  }

  //de kelvin a todas las escalas

  if (selectTInicial === "kelvin" && selectTFinal === "celsius") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "kelvin" && selectTFinal === "farenheit") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "kelvin" && selectTFinal === "rankine") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "kelvin" && selectTFinal === "kelvin") {
    crearVerde();
    return valorTInicial;
  }

  //de rankine a todas las escalas

  if (selectTInicial === "rankine" && selectTFinal === "celsius") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "rankine" && selectTFinal === "farenheit") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "rankine" && selectTFinal === "kelvin") {
    crearVerde();
    return valorTInicial;
  }

  if (selectTInicial === "rankine" && selectTFinal === "rankine") {
    crearVerde();
    return valorTInicial;
  }

  //error si el resultado es NaN
}

function mensajeError(mensa) {
  const mensaje = document.createElement("p");
  mensaje.textContent = mensa;
  mensaje.classList.add("mt-10", "mensaje", "error");

  const errores = document.querySelectorAll(".error");

  const resultado = document.querySelector("#resultado");
  if (errores.length === 0) {
    resultado.appendChild(mensaje);
  }

  setTimeout(() => {
    mensaje.remove();
  }, 3000);
}

function crearVerde() {
  let selectTInicial = document.querySelector("#temperatura-inicial").value;
  let valorTInicial = document.querySelector("#valor-1").value;
  valorTInicial = Number(valorTInicial);

  if (isNaN(valorTInicial)) {
    mensajeError("No se permiten letras o simbolos");
    return;
  }

  let selectTFinal = document.querySelector("#select-temperatura-final").value;

  if (selectTInicial === "celsius" && selectTFinal === "farenheit") {
    valorTInicial = ((valorTInicial * 9) / 5 + 32).toFixed(3);
  }

  if (selectTInicial === "celsius" && selectTFinal === "kelvin") {
    valorTInicial = valorTInicial = (valorTInicial + 273.15).toFixed(3);
  }

  if (selectTInicial === "celsius" && selectTFinal === "rankine") {
    valorTInicial = ((valorTInicial * 9) / 5 + 491.67).toFixed(3);
  }

  if (selectTInicial === "celsius" && selectTFinal === "celsius") {
    valorTInicial = (valorTInicial * 1).toFixed(3);
  }

  if (selectTInicial === "farenheit" && selectTFinal === "celsius") {
    valorTInicial = ((5 * (valorTInicial - 32)) / 9).toFixed(3);
  }

  if (selectTInicial === "farenheit" && selectTFinal === "rankine") {
    valorTInicial = (valorTInicial + 459.67).toFixed(3);
  }

  if (selectTInicial === "farenheit" && selectTFinal === "kelvin") {
    valorTInicial = ((5 * (valorTInicial - 32)) / 9 + 273.15).toFixed(3);
  }

  if (selectTInicial === "farenheit" && selectTFinal === "farenheit") {
    valorTInicial = valorTInicial * 1;
  }

  if (selectTInicial === "kelvin" && selectTFinal === "celsius") {
    valorTInicial = (valorTInicial - 273.15).toFixed(3);
  }

  if (selectTInicial === "kelvin" && selectTFinal === "farenheit") {
    valorTInicial = ((9 * (valorTInicial - 273.15)) / 5 + 32).toFixed(3);
  }

  if (selectTInicial === "kelvin" && selectTFinal === "rankine") {
    valorTInicial = (valorTInicial * 1.8).toFixed(3);
  }

  if (selectTInicial === "kelvin" && selectTFinal === "kelvin") {
    valorTInicial = valorTInicial * 1;
  }

  if (selectTInicial === "rankine" && selectTFinal === "celsius") {
    valorTInicial = ((5 * (valorTInicial - 491.67)) / 9).toFixed(3);
  }

  if (selectTInicial === "rankine" && selectTFinal === "farenheit") {
    valorTInicial = (valorTInicial - 459.67).toFixed(3);
  }

  if (selectTInicial === "rankine" && selectTFinal === "kelvin") {
    valorTInicial = ((5 * (valorTInicial - 491.67)) / 9 + 273.15).toFixed(3);
  }

  if (selectTInicial === "rankine" && selectTFinal === "rankine") {
    valorTInicial = valorTInicial * 1;
  }

  const resultados = document.querySelectorAll("#resultado p");

  if (resultados.length === 0) {
    const div = document.createElement("div");
    div.classList.add("mt-10", "correcto");
    div.innerHTML = `
    <p>El resultado es ${valorTInicial} grados ${selectTFinal}
    `;
    const resultado = document.querySelector("#resultado");
    resultado.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 10000);
  }
}
