// prettier-ignore
let n1 = 7, n2 = 5.5, n3 = 2, n4 = 4, media = (n1 + n2 + n3 + n4) / 4;

console.log("A média é: " + media.toFixed(2));

// 1) Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
if (media >= 5) {
  console.log("Parabéns, você passou");
} else {
  console.log("Que pena, volte na próxima");
}

// 2) Alterar o fundo da tela da maneira que achar mais legal
document.body.style.backgroundColor = "#04394e";

// 3) Imprimir na própria página o resultado, ao invés do console

// referências
const calcBotao = document.getElementById("calcBotao");
const mediaNotas = document.getElementById("mediaNotas");

calcBotao.onclick = e => {
  // referências
  const calcNome = document.getElementById("calcNome").value;
  const calcnota1 = parseFloat(document.getElementById("calcNota1").value);
  const calcnota2 = parseFloat(document.getElementById("calcNota2").value);
  const calcnota3 = parseFloat(document.getElementById("calcNota3").value);
  const calcnota4 = parseFloat(document.getElementById("calcNota4").value);

  // verifica se todos os campos estão preenchidos
  if (calcNome && calcnota1 && calcnota2 && calcnota3 && calcnota4) {
    const media = (calcnota1 + calcnota2 + calcnota3 + calcnota4) / 4;

    if (media >= 5) {
      mediaNotas.innerHTML = `<p class="passou">Parabéns! ${calcNome} passou de ano com 
      uma média de ${media.toFixed(2)}</p>`;
    } else {
      mediaNotas.innerHTML = `<p class="reprovou">Que peninha! ${calcNome} reprovou de ano com 
      uma média de ${media.toFixed(2)}</p>`;
    }
  } else {
    mediaNotas.innerHTML = `<p class="campoVazio">Preencha todos os campos</p>`;
  }
};

// 4) Criar um conversor de temperaturas entre farenheit e celcius
// obtém a referência ao elemento HTML onde o resultado será exibido
const botaoCelcius = document.getElementById("botaoCelcius");
const botaoFahrenheit = document.getElementById("botaoFahrenheit");
const campoNumero = document.getElementById("campoNumero");
const converterTemp = document.getElementById("converterTemp");
const converterTempP = converterTemp.querySelector("p");

// calcula celcius para fahrenheit
botaoCelcius.onclick = e => {
  e.preventDefault(); // previne evento padrão do botão
  const fahrenheit = campoNumero.value; // salva o valor digitado
  const resultado = ((fahrenheit - 32) * 5) / 9; // converte para fahrenheit
  const mensagem = `${fahrenheit}°F é igual a ${resultado.toFixed(2)}°C`; // gera template string
  if (fahrenheit) {
    // se valor digitado imprime mensagem se não pede para digitar
    converterTempP.innerHTML = mensagem;
  } else {
    converterTempP.innerHTML = `<p class="campoVazio">Digite um número para efetuar o cálculo</p>`;
  }
};

// calcula fahrenheit para celcius
botaoFahrenheit.onclick = e => {
  // previne evento padrão do botão
  const celcius = campoNumero.value; // salva o valor digitado
  const resultado = (celcius * 9) / 5 + 32; // converte para celcius
  const mensagem = `${celcius}°C é igual a ${resultado.toFixed(2)}°F`; // gera template string
  if (celcius) {
    // se valor digitado imprime mensagem se não pede para digitar
    converterTempP.innerHTML = mensagem;
  } else {
    converterTempP.innerHTML = `<p class="campoVazio">Digite um número para efetuar o cálculo</p>`;
  }
};

// 5) Colocar a conta inteira da média em apenas uma linha

/*
a conta foi colocada na linha 2 para não quebrar o código, ficando assim:


let n1 = 7, n2 = 5.5, n3 = 2, n4 = 4, media = (n1 + n2 + n3 + n4) / 4;


*/
