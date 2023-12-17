const lista = [
    {
        nome: 'Jose',
        idade: 15,
    },
    {
        nome: 'Andre',
        idade: 31,
    },
    {
        nome: 'Pedro',
        idade: 32,
    },
    {
        nome: 'Jota',
        idade: 35,
    },
    {
        nome: 'Jora',
        idade: 321,
    },
    {
        nome: 'Jurasta',
        idade: 39,
    },
];

//for(let i = 0; i < lista.length; i++) {
//    console.log(lista[i]);
//}

let soma = 0;

lista.forEach((objeto) => { console.log(objeto)});

lista.forEach((objeto) => { soma += objeto.idade});

console.log(soma);