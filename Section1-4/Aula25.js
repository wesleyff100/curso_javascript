const jose = {
    idade: 35,
    peso: 80,
    nome: 'Jose',
    genero:'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua qualquier',
    numero: 432,
    pais: 'Brasil',
    temFilhos: true,

}

const exibirInformações =(pessoa, qualInformaçao) => {
    console.log(`${qualInformaçao} do(a) ${pessoa.nome} : `, pessoa[qualInformaçao]);
}

exibirInformações(jose, 'pais')