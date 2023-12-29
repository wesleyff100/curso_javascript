
class Produto {
    nome;
    preço;
    descricao_prd;
    codigo;
    qtd_estoque;

    alterarPreco(novoPreco) {
        if (novoPreco < 0) {
            throw new TypeError('Preço não pode ser negativo');
        }
        this.preço = novoPreco;
    
    }

    adicionarEstoque(qtd) {
        if (qtd < 0) {
            throw new TypeError('Quantidade não pode ser negativa');
        }
        this.qtd_estoque += qtd;
    }
    removerEstoque(qtd) {
        const estoqueFinal = this.qtd_estoque - qtd;
        if (estoqueFinal < 0) {
            throw new TypeError('Quantidade não pode ser negativa');
        }
        this.qtd_estoque -= qtd;
    }

    constructor(nome, descricao_prd, codigo) {
        this.nome = nome;
        this.descricao_prd = descricao_prd;
        this.codigo = codigo;
        this.preço = 0;
        this.qtd_estoque = 0;
    }

}
class Smartphone extends Produto {
    marca;
    modelo;
    sistema_operacional;

    descricao() {
        return `
        nome: ${this.nome}
        preço: ${this.preço}
        descricao: ${this.descricao_prd}
        qtd_estoque: ${this.qtd_estoque}
        marca: ${this.marca}
        modelo: ${this.modelo}
        sistema_operacional: ${this.sistema_operacional}
        `
    }

    constructor(nome, descricao_prd, codigo, marca, modelo, sistema_operacional) {
        super(nome, descricao_prd, codigo);
        this.marca = marca;
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;
    }
}

const smartphone1 = new Smartphone(
    'Smartphone',
    'Smartphone muito bom',
    '123456',
    'Samsung',
    'Galaxy S20',
    'Android',

);

smartphone1.alterarPreco(1000);
smartphone1.adicionarEstoque(10);
smartphone1.removerEstoque(5);

console.log(smartphone1.descricao());
