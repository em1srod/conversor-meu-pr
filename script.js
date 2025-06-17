function converter() {
  const valor = parseFloat(document.getElementById('valor').value);
  const tipo = document.getElementById('tipoConversao').value;
  let resultado = 0;

  if (isNaN(valor)) {
    document.getElementById('resultado').innerText = "Digite um valor válido.";
    return;
  }

  if (tipo === "kgToLb") {
    resultado = valor * 2.20462;
    document.getElementById('resultado').innerText = `${valor} kg = ${resultado.toFixed(2)} lb`;
  } else {
    resultado = valor * 0.453592;
    document.getElementById('resultado').innerText = `${valor} lb = ${resultado.toFixed(2)} kg`;
  }
}
