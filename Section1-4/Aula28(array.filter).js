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

const filtrarPessoa = (pessoa) => pessoa.idade > 30;

const listaFiltrada = lista.filter(filtrarPessoa);

console.log(lista);

console.log(listaFiltrada);