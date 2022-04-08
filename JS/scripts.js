//VARIÁVEIS GLOBAIS
//IDENTIFICAÇÃO DOS GIFS
// #id="bobrossparrot" ->gifs/bobrossparrot
// #id="explodyparrot" ->gifs/explodyparrot
// #id="fiestaparrot" ->gifs/fiestaparrotf
// #id="metalparrot" ->gifs/metalparrot
// #id="revertitparrot" ->gifs/gifs/revertitparrot
// #id="tripletsparrot"->gifs/tripletsparrot
// #id="unicornparrot" ->/gifs/unicornparrot
//Definindo todas as diferentes cartas existentes no jogo
const todasAsCartas=[`<li>
    <div class="carta-parrot-front">
        <img class=""src="/imagens/front.png" alt="ilustração de um papagaio"/>
        <img #id="bobrossparrot" class="desabilitado"src="/gifs/bobrossparrot.gif" alt="gif de um papagaio"/>
    </div>
</li>`,`<li>
    <div class="carta-parrot-front">
        <img src="/imagens/front.png" alt="ilustração de um papagaio"/>
        <img #id="explodyparrot" class="desabilitado" src="/gifs/explodyparrot.gif" alt="gif de um papagaio"/>
    </div>
</li>`,`<li>
<div class="carta-parrot-front">
    <img src="/imagens/front.png" alt="ilustração de um papagaio"/>
    <img #id="fiestaparrot" class="desabilitado" src="/gifs/fiestaparrot.gif" alt="gif de um papagaio"/>
</div>
</li>`,`<li>
<div class="carta-parrot-front">
    <img src="/imagens/front.png" alt="ilustração de um papagaio"/>
    <img #id="metalparrot" class="desabilitado" src="/gifs/metalparrot.gif" alt="gif de um papagaio"/>
</div>
</li>`,`<li>
<div class="carta-parrot-front">
    <img src="/imagens/front.png" alt="ilustração de um papagaio"/>
    <img #id="revertitparrot" class="desabilitado" src="/gifs/revertitparrot.gif" alt="gif de um papagaio"/>
</div>
</li>`, `<li>
<div class="carta-parrot-front">
    <img src="/imagens/front.png" alt="ilustração de um papagaio"/>
    <img #id="tripletsparrot" class="desabilitado" src="/gifs/tripletsparrot.gif" alt="gif de um papagaio"/>
</div>
</li>`, `<li>
<div class="carta-parrot-front">
    <img src="/imagens/front.png" alt="ilustração de um papagaio"/>
    <img #id="unicornparrot" class="desabilitado" src="/gifs/unicornparrot.gif" alt="gif de um papagaio"/>
</div>
</li>`];

const lista=document.querySelector("ul");
//CRIANDO ARRAY COM AS CARTAS QUE SERÃO USADAS NO JOGO
function gerarVetorCartas(quantidade){
    let j=0;
    cartas=[];
    for (let i=0;i<quantidade;i++){
        cartas[j]=todasAsCartas[i];
        j++;
        cartas[j]=todasAsCartas[i];
        j++;
    }
    return cartas;
}
//FUNÇÃO DE COMPARAÇÃO DO SORT PARA DISPOR AS CARTAS ALEATORIAMENTE
function comparador() { 
	return Math.random() - 0.5;
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
    for (let i=0;i<cartas.length;i++){
        lista.innerHTML+=cartas[i];
    }
}
distribuirCartas()
