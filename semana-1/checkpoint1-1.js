//Checkpoint de Exercícios 1
//Exercício 1

//Atribuição das constantes referentes aos dados pessoais
const name = 'Rubens';
const lastName= 'Santos';
const birthDay = '23';
const monthOfBirth = '0' + 8;
const yearOfBirth = 1998;

//Atribuição das constantes referantes as notas da pessoa
const firtScore = 9;
const secondScore = 7;

//Atribuição da variável da média
let mediumScore = ((firtScore + secondScore) / 2);

//Impressão dos valores das constantes na tela
console.log('Nome Completo: ' + name + ' ' + lastName);
console.log('Data de Nascimento: ' + birthDay + '/' + monthOfBirth + '/' + yearOfBirth);
console.log('Média: ' + mediumScore);