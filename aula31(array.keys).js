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
const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade,
        }
    };
}

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);

//console.log(pessoas);

const listaDeVolta = chaves.map((chave) => ({ nome: chave, idade: pessoas[chave].idade }));

console.log(chaves);

console.log(Object.keys(lista[0]))

console.log(listaDeVolta);

