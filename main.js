const form = document.getElementById("form-cadastrar");
const inputNumero = document.getElementById("numero");
const nomes = [];
const numeros = [];
let linhas = "";

function formatarTelefone(input) {
  const numeroLimpo = input.value.replace(/\D/g, "");

  if (numeroLimpo.length >= 11) {
    const codigoArea = numeroLimpo.substring(0, 2);
    const primeiroDigito = numeroLimpo.substring(2, 3);
    const quatroDigitos1 = numeroLimpo.substring(3, 7);
    const quatroDigitos2 = numeroLimpo.substring(7, 11);
    input.value = `(${codigoArea}) ${primeiroDigito} ${quatroDigitos1}-${quatroDigitos2}`;
  } else {
    input.value = numeroLimpo;
  }
}

inputNumero.addEventListener("input", function () {
  formatarTelefone(this);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputNumero.value.length === 16) {
    adicionaLinha();
    atualizaTabela();
  } else {
    alert("O telefone está incompleto, siga o exeplo: 43 9 96142131");
  }
});

function adicionaLinha() {
  const inputNome = document.getElementById("nome");
  const nome = inputNome.value;
  const numero = inputNumero.value;

  if (nomes.includes(nome)) {
    alert(`O contato: ${nome} já foi inserido`);
  } else {
    nomes.push(nome);
    numeros.push(numero);

    const linha = `<tr><td>${nome}</td><td>${numero}</td></tr>`;

    linhas += linha;
  }

  inputNome.value = "";
  inputNumero.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
