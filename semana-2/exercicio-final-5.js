//Exercícios Finais
//Exercício 5

//Atribuição da contante do tipo array + objetos
const users = [
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

//Implementação da função FOR para a impressão dos nomes com suas respectivas skills
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name+' possui as seguintes skills:')
    for (let j = 0; j < users[[i]].skills.length; j++) {
        console.log('\t\t'+users[i].skills[j])
    }
}
