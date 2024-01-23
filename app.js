


let numerosSorteados = [];
let limite = 10;
let tentativas = 1;
let numeroSecreto = gerarNumero(limite);
let reiniciarBtn2 = document.getElementById('reiniciar');
let Btn1 = document.querySelector('button');
console.log(numeroSecreto);

exibirMsgInicial();



function exibirTexto(texto, tag) {
    let varText = document.querySelector(tag);
    varText.innerHTML = texto;

    // Reproduzir voz
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});



}

function gerarNumero(limit) {
    let numeroEscolhido = parseInt(Math.random() * (limit ?? 10) + 1);
    if (numerosSorteados.length == limit) {
        numerosSorteados = [];
    }

    return (!numerosSorteados.includes(numeroEscolhido)) ? numeroEscolhido : gerarNumero(limite);
}



function verificarChute() {

    let chute = document.querySelector('input');

    if (numeroSecreto == chute.value) {
        numerosSorteados.push(numeroSecreto);

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativa = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}`;
        exibirTexto("Acertou!", 'h1');
        exibirTexto(msgTentativa, 'p');

        Btn1.setAttribute('disabled', true);
        reiniciarBtn2.removeAttribute('disabled');





    } else if (chute != '') {
        let testChutText = chute > numeroSecreto ? 'menor' : 'maior';
        exibirTexto(`O número secreto é ${testChutText}!`, 'p')
        tentativas++;
        limparCampo();


    }






}

function reiniciarJogo() {
    numeroSecreto = gerarNumero(limite);
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    reiniciarBtn2.setAttribute('disabled', true);
    Btn1.removeAttribute('disabled');


}

function exibirMsgInicial() {
    exibirTexto("Jogo do número secreto", 'h1')
    exibirTexto(`Escolha um número entre 1 e ${limite}`, 'p')
}




function limparCampo() {

    let chute = document.querySelector('input');
    chute.value = '';




}