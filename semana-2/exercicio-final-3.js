//Exercícios Finais
//Exercício 3

//3.Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que mostrao maior numero da lista

//Atribuição da constante do tipo array
const array = [6, 21, 9, 2, 50, 98, 1];

//Atribuição da variável para o resultado a ser impresso da função FOR implementada a seguir
let elem_maior = array[0]

//Implementação da função FOR para realizar a leitura da array
for (i = 0; i < array.length; i++) {
    if (array [i] > elem_maior) {
        elem_maior = array[i];
    }
}

//Impressão na tela
console.log(`O maior número no array é: ${elem_maior}`);
