//Exercícios Finais
//Exercício 1

//Atribuição das constantes + funções
const soma = function (n1, n2){
    return n1 + n2; 
}
 const subt = function (n1, n2){
    return n1 - n2; 
}
 const mult = function (n1, n2){
    return n1 * n2; 
}
 const div = function (n1, n2){
    return n1 / n2; 
}
 
//Função que retorna a operação realizada informada pela string nos dois números
 const operations = {soma: soma, subtrai:subt, multiplica:mult, dividi:div}
 
 //Impressão na tela
 console.log(operations["soma"](2,10));
 console.log(operations["subtrai"](2,10));
 console.log(operations["multiplica"](2,10));
 console.log(operations["dividi"](2,10));