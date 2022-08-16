//Exercícios Finais
//Exercício 6

 //Atribuição das váriáveis para os dois jogadores + atribuição randômica dos números entre 0 a 2.
 let player1 = Math.floor(Math.random() * 3);
 let player2 = Math.floor(Math.random() * 3);

//Implementando a função que será retornada ao final
function rockPaperScissorsWinner() {

//Implementação da função FOR para a verificação do resultado + impressão na tela
    if(player1 == player2) console.log('A rodada deu empate!')
    if(player1 == 0 && player2 == 1) console.log(`Tesoura vence papel.\nPlayer 1 Ganhou!`)
    if(player1 == 0 && player2 == 2) console.log(`Pedra vence tesoura.\nPlayer 2 Ganhou!`)
    if(player1 == 1 && player2 == 0) console.log(`Tesoura vence papel.\nPlayer 2 Ganhou!`)
    if(player1 == 1 && player2 == 2) console.log(`Papel vence pedra.\nPlayer 1 Ganhou!`)
    if(player1 == 2 && player2 == 0) console.log(`Pedra vence tesoura.\nPlayer 1 Ganhou!`)
    if(player1 == 2 && player2 == 1) console.log(`Papel vence pedra.\nPlayer 2 Ganhou!`)
}

//Chamando a função
rockPaperScissorsWinner()