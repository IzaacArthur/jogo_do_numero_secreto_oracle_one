//tag h1 é geralmente utilizada para titulos


// let titulo = document.querySelector('h1');
// titulo. innerHTML = 'Jogo do número secreto';

//Este é o parágrafo do documento, linha 23 do html

let numeroLimite = 10;
let listaDeNumerosSecretos = [];
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escreva um número entre 1 e 10 ';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio(){
    let quaantidadeElementosLista = listaDeNumerosSecretos.length;
    if (quaantidadeElementosLista == 3){
        listaDeNumerosSecretos = [];
    }

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (listaDeNumerosSecretos.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        console.log(listaDeNumerosSecretos);
        listaDeNumerosSecretos.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}