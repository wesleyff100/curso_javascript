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
];

const converterObjeto = (objeto) => {
    return {nome: objeto.nome,
    idade: objeto.idade,
    nomeIdade: `${objeto.nome} tem ${objeto.idade} anos`,	
    }
}   

console.log(lista.map(converterObjeto));