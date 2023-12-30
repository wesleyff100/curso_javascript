// Inside the Usuario class constructor
Object.defineProperties(this, {
    nome: {
        get: () => nome,
        set: (value) => nome = value,
        ...propriedadePadrao(nome), // Spread properties from propriedadePadrao
    },
    senha: {
        get: () => senha,
        set: (value) => {
            if (value.length < 4) {
                throw new TypeError('Senha muito curta, precisa ter pelo menos 4 caracteres');
            }
            senha = value;
        },
        ...propriedadePadrao(senha), // Spread properties from propriedadePadrao
    },
    email: {
        get: () => email,
        set: (value) => email = value,
        ...propriedadePadrao(email), // Spread properties from propriedadePadrao
    },
});
