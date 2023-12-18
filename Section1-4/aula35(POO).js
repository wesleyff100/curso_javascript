class Pessoa {
    nome;
    idade;
    filhos;

    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
    
    setNome(nome) {
        this.nome = nome;
    }

    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }
}

const filho = new Pessoa('João', 20, ['Maria', 'José']);
const filho1 = new Pessoa('Maria', 20);

console.log('Filho1 tem quantos filhos?', filho1.quantosFilhos());

const pessoa = new Pessoa('Tetris', 20, ['Maria', 'José']);

console.log('Quantos filhos?', pessoa.quantosFilhos());
console.log(pessoa);
