//Exercícios Finais
//Exercício 2

//Atribuição da constante + objeto com suas propriedades
const user = {
    name: "Juca",
    projects: [
        {name: "Projeto 1", start: "01/02/2021", active: true},
        {name: "Projeto 2", start: "03/03/2021", active: false},
        {name: "Projeto 3", start: "10/08/2021", active: true},
        {name: "Projeto 4", start: "20/08/2021", active: false},
        {name: "Projeto 5", start: "18/10/2021", active: true}
    ]
}

//Implementação da função FOR para realizar a leitura do objeto
for (i = 0; i < user.projects.length; i++) {
    //Verificação dos objetos + impressão na tela
    if (user.projects[i].active == true) {
       console.log(user.projects[i].name)
    }
}