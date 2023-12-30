const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    enumerable: true, 
    configurable: false, 
    writable: false,
});

class Usuario {
    constructor(nome, senha, email) {
        this.email = email;
        this.senha = senha;

        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value,
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.length < 4) {
                        throw new TypeError('Senha muito curta, precisa ter pelo menos 4 caracteres');
                    }
                    senha = value;
                },
            },
            email: {
                get: () => email,
                set: (value) => email = value,
            },
        });

        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email),
        });
    }
}

const usuario = new Usuario('email', 'senha', 'nome');

usuario.nome = 'outra coisa';

console.log(usuario);
