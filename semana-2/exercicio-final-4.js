//Exercícios Finais
//Exercício 4

//Atribuição da variável do tipo template string
let frase = 'Um dia eu fico bom nisso.';


//Implementação de uma função que conte quantas palavras exitem na variável "frase", usando o método split de string + impressão
function quant_Palavras_Frase(frase) {
    num_Palavras_Frase = frase.split([' '])
    console.log(num_Palavras_Frase.length)
}

//Chamandando a função
quant_Palavras_Frase(frase)