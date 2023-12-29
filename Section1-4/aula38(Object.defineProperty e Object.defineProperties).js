
const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    enumerable: true, 
    configurable: false, 
    writable: false,
})

class Usuario{

    nome;
    senha;
    email;

    constructor(nome, senha, email){
        this.email = email;
        this.senha = senha;

        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email),

        });


        Object.defineProperty(this, 'nome', {
            value: nome,
            enumerable: true, // se estiver true => sera exibido no usuario
            configurable: false, // se estiver true => delete usuario.nome => true
            writable: false // se estiver true => usuario.nome ='outra coisa' => erro
        });
}
}
const usuario = new Usuario('email', 'senha', 'nome');

usuario.nome = 'outra coisa';

console.log(usuario);