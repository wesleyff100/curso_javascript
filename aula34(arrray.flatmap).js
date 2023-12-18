const lista = [
    {
        nome: 'Jose',
        idade: 15,
        cartoes: ['3244', '5342'],
    },
    {
        nome: 'Andre',
        idade: 21,
        cartoes: ['3244', '2342'],
    },
    {
        nome: 'Pedro',
        idade: 32,
        cartoes: ['4244', '6342'],
    },
    {
        nome: 'Jota',
        idade: 45,
        cartoes: ['6244', '7342'],
    },
    {
        nome: 'Jora',
        idade: 31,
        cartoes: ['8244', '9342'],
    },
    {
        nome: 'Jurasta',
        idade: 29,
        cartoes: ['1244', '2342'],
    },
];


const cartoes = lista.flatMap((objeto) => objeto.cartoes); 

console.log(cartoes);