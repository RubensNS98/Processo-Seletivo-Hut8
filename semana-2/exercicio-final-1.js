//Exercícios Finais
//Exercício 1

//Atribuição da variável do tipo array
let array = [10, 25, 60, 5];

//Atribuição da variável para o resultado a ser impresso da função FOR implementada a seguir
let res_final = 0

//Implementação da função FOR para realizar a soma dos elementos da array, sendo cada um deles multiplicado pelo seu índice
for (let i = 0; i < array.length; i++) {
    res_final = res_final + (array[i] * i)
}

//Impressão na tela
console.log(`Resultado final: ${res_final}`)