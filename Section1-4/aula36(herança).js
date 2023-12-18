
class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario{
    permissoes

    constructor(email, senha, nome, permissoes){
        super(email, senha, nome);
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario{
    compras;


}

const admin = new Administrador('email@email.com', 'Jose1234','Jose', [1,6]);

const comprador = new Comprador();
comprador.senha = 'senha123';


console.log(admin);

console.log(comprador);