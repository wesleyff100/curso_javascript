const lista = [
    {
        nome: 'Jose',
        idade: 15,
        exibir: true,
    },
    {
        nome: 'Andre',
        idade: 21,
    },
    {
        nome: 'Pedro',
        idade: 32,
    },
    {
        nome: 'Jota',
        idade: 45,
    },
    {
        nome: 'Jora',
        idade: 31,
    },
    {
        nome: 'Jurasta',
        idade: 29,
    },
];

// const pessoa = {
//     jose:{
//         idade: 54,
//     },
//     joao:{
//         idade: 54,
//     },
//     maria:{
//         idade: 54,
//     },
// }

const funcaoReducer = (acc, objeto) => {
    const pessoas = lista.reduce((acc, objeto) => {
        return {
            ...acc,
            [objeto.nome]: {
                idade: objeto.idade,
            }
        }
    }, {});



console.log(pessoas);
console.log(pessoas.Jora.idade);