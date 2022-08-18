//Exercícios Finais
//Exercício 2

//Atribuindo a constante + funções + impressão na tela
const verificarIdade = ({nome, idade}) => {
    return idade >= 18 ? console.log(`${nome} é maior de idade!`) : console.log(`${nome} é menor de idade!`);
}

verificarIdade({nome: 'Juca', idade: 10});