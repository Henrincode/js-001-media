// prettier-ignore
let n1 = 7, n2 = 5.5, n3 = 2, n4 = 4;
let media = (n1 + n2 + n3 + n4) / 4;

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

// cria a mensagem com a média formatada
let mensagemMedia = `A média é: ${media.toFixed(2)}.`;

// define a mensagem de aprovação ou reprovação com base na média
let mensagemAprovadoReprovado;

if (media >= 5) {
  mensagemAprovadoReprovado = "Parabéns, você passou";
} else {
  mensagemAprovadoReprovado = "Que pena, volte na próxima";
}

// obtém a referência ao elemento HTML onde o resultado será exibido
let conteudo = document.getElementById("conteudo");

// insere o conteúdo HTML gerado dentro da div com id "conteudo"
conteudo.innerHTML = `
    <p>${mensagemMedia}<br>
    ${mensagemAprovadoReprovado}</p>`;

// 4) Criar um conversor de temperaturas entre farenheit e celcius

// 5) Colocar a conta inteira da média em apenas uma linha
