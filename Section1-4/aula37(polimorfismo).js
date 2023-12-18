
class Usuario {
    email;
    senha;
    nome;

    validarSenha(email, senha) {
        return email + senha === this.nome;
    }

    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario{
    permissoes

    validarSenha(email, senha) {
        return email === this.email && senha === this.senha;
    }

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

const admin = new Administrador('email@email.com', 'senha','Jose', [1,6]);

const comprador = new Comprador();

const usuario = new Usuario('email', 'senha', 'nome');

comprador.senha = 'senha123';


console.log(usuario.validarSenha('email', 'senha'));
console.log(admin.validarSenha('email@email.com', 'senha'));