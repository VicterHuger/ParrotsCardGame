//IDENTIFICAÇÃO DOS GIFS
// id="bobrossparrot" ->gifs/bobrossparrot
// id="explodyparrot" ->gifs/explodyparrot
// id="fiestaparrot" ->gifs/fiestaparrotf
// id="metalparrot" ->gifs/metalparrot
// id="revertitparrot" ->gifs/gifs/revertitparrot
// id="tripletsparrot"->gifs/tripletsparrot
// id="unicornparrot" ->/gifs/unicornparrot
//CRIANDO OBJETOS PARA CADA CARTA DIFERENTE NO JOGO
//nomeGif -> propriedade para identificar elementos que tenham a mesma imagem GIF
//idImg ->propriedade para diferenciar cada carta do jogo
//transicaoCartaFront ->propriedade da classe da carta com a imagem inicial
//transicaoCartaBack -> propriedade da classe da carta que contém o gif
//numeroDaJogada -> propriedade para identificar qual o estado da carta -> 0-está virada de cabeça para baixo, 1-foi virada porém ainda não foi confirmada se outro par foi selecionado, 2->carta foi virada e seu par já foi encontrado
// VARIÁVEL GLOBAL
const lista=document.querySelector("ul");
// CRIANDO OBJETOS
const bobrossparrot={
    nomeGif:"bobrossparrot",
    idImg:"bobrossparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const explodyparrot={
    nomeGif:"explodyparrot",
    idImg:"explodyparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const fiestaparrot={
    nomeGif:"fiestaparrot",
    idImg:"fiestaparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const metalparrot={
    nomeGif:"metalparrot",
    idImg:"metalparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const revertitparrot={
    nomeGif:"revertitparrot",
    idImg:"revertitparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const tripletsparrot={
    nomeGif:"tripletsparrot",
    idImg:"tripletsparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const unicornparrot={
    nomeGif:"unicornparrot",
    idImg:"unicornparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
//CRIANDO UMA ARRAY DOS OBJETOS DAS CARTAS DIFERENTES DO JOGO 
const todasAsCartas=[bobrossparrot,explodyparrot,fiestaparrot,metalparrot,revertitparrot,tripletsparrot,unicornparrot];
//CRIANDO ARRAY DE OBJETOS DAS CARTAS QUE SERÃO USADAS NO JOGO
function gerarVetorCartas(quantidade){
    let j=0;
    const cartas=[];
    //GERA UM NOVO OBJETO PARA PODER DIFERENCIAR AS CARTAS POR IDS DIFERENTES
  	let novoObje={
    nomeGif:"",
    idImg:"",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0}
    for (let i=0;i<quantidade;i++){
        novoObje={
            nomeGif:"",
            idImg:"",
            transicaoCartaFront:'',
            transicaoCartaBack:'',
            numeroDaJogada:0}
        cartas.push(todasAsCartas[i]);
        j++;
        cartas.push(Object.assign(novoObje,todasAsCartas[i]));
        cartas[j].idImg=`${cartas[j].idImg}.2`;
        j++;
    }
    return cartas;
}
//FUNÇÃO DE COMPARAÇÃO DO SORT PARA DISPOR AS CARTAS ALEATORIAMENTE
function comparador() { 
	return Math.random() - 0.5;
}
//FUNÇÃO QUE ADICIONA AS CARTAS AO JOGO
function adicionarCartas(){
        lista.innerHTML="";
    for (let i=0;i<cartas.length;i++){
        lista.innerHTML+=
    `<li>
        <div id=${cartas[i].idImg} class="carta-parrot-front" onclick="virarCarta(this)">
            <div class="front-face face ${cartas[i].transicaoCartaFront}">
                <img src="/imagens/front.png" alt="ilustração de um papagaio"/>
            </div>
            <div class="back-face face" ${cartas[i].transicaoCartaBack}>
                <img src="/gifs/${cartas[i].nomeGif}.gif" alt="gif de um papagaio"/>
            </div>
        </div>         
    </li>` 
    }
}
//DISTRIBUIÇÃO DE CARTAS
function distribuirCartas(){
    let numeroDeCartas=Number(prompt("Olá! Este é o ParrotGame, um jogo da memória incrível! É super simples, basta digitar com quantas cartas você quer jogar! - Escolha um número par de 4 a 14"));
    while (!numeroDeCartas){
        numeroDeCartas=Number(prompt("Não foi possível identificar o número de cartas, digite um valor numeral par de 4 a 14. Exemplo de Resposta: 10"));
    }
    while (numeroDeCartas<4 || numeroDeCartas>14 || numeroDeCartas%2!==0){
        if(numeroDeCartas<4){
            numeroDeCartas=Number(prompt("Não é possível jogar com números menores que 4. Escolha um valor par entre 4 e 14."));
        }
        if(numeroDeCartas>14){
            numeroDeCartas=Number(prompt("Não é possível jogar com números maiores que 14. Escolha um valor par entre 4 e 14."));
        }
        if(numeroDeCartas%2!==0){
            numeroDeCartas=Number(prompt("Não é possível jogar com números ímpares de cartas. Escolha valores pares entre 4 e 14. Respostas possíveis: 4, 6, 8, 10, 12 e 14."))
        }
    }
    let numeroDeCartasDiferentes=numeroDeCartas/2;
    cartas=gerarVetorCartas(numeroDeCartasDiferentes);
    cartas.sort(comparador); // Após esta linha, as cartas estarão embaralhadas
    adicionarCartas();  
}
distribuirCartas();
//teste
/* function virarcarta(element){
    divFace=element.querySelector("div");
    divBack=element.querySelector("div+div");
    divBack.classList.toggle("transicao-back-face");
    divFace.classList.toggle("transicao-front-face");
} */
//VIRAR A CARTA
 function virarCarta(elemento){
    let idCarta=elemento.id;
    verificarCarta(idCarta);
}
//VERIFICAR SE A CARTA SERÁ VIRADA OU NÃO QUANDO CLICADA
function verificarCarta(idElemento){
    //ENCONTRAR O INDEX DO OBJETO RELACIONADO AO ELEMENTO QUE FOI CLICADO, NO ARRAY CARTAS
    let indexElementoClicado;
    for (let i=0;i<cartas.length;i++){
        if(cartas[i].idImg===idElemento){
            indexElementoClicado=i;
            break;
        } 
    }
    //ATUALIZAR O NUMERO DA JOGADA EM FUNCAO DA POSICAO DA CARTA
    for (let i=0;i<cartas.length;i++){
        //VERIFICAR SE JÁ TEM ALGUMA CARTA VIRADA E ATUALIZA O NÚMERO DE JOGADAS
        if(cartas[i].numeroDaJogada===1 && cartas[indexElementoClicado].numeroDaJogada===0){
            cartas[indexElementoClicado].numeroDaJogada=1;
            if(cartas[i].nomeGif===cartas[indexElementoClicado].nomeGif){
                cartas[indexElementoClicado].numeroDaJogada=2;
                cartas[i].numeroDaJogada=2;
                return;
            }else{
                cartas[indexElementoClicado].numeroDaJogada=0;
                cartas[i].numeroDaJogada=0;
                return;
            }
        }
    }
}
