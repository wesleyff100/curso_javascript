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

lista.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    return 0;
});

console.log(lista);