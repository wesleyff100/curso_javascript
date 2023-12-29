// Classe base para usuários
class Usuario {
    // Atributos compartilhados por todos os usuários
    email;
    senha;
    nome;

    // Método para validar a senha de um usuário com base no email e senha fornecidos
    validarSenha(email, senha) {
        // A implementação padrão compara a concatenação de email e senha com o nome do usuário
        return email + senha === this.nome;
    }

    // Construtor da classe Usuario
    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

// Classe que herda de Usuario para representar administradores
class Administrador extends Usuario{
    // Atributo adicional para armazenar as permissões do administrador
    permissoes;

    // Método para validar a senha de um administrador com base no email e senha fornecidos
    validarSenha(email, senha) {
        // A implementação específica para administradores compara email e senha diretamente
        return email === this.email && senha === this.senha;
    }

    // Construtor da classe Administrador
    constructor(email, senha, nome, permissoes){
        // Chamando o construtor da classe base (Usuario)
        super(email, senha, nome);
        // Inicializando o atributo de permissões específico para administradores
        this.permissoes = permissoes;
    }
}

// Classe que herda de Usuario para representar compradores
class Comprador extends Usuario{
    // Atributo adicional para armazenar as compras do comprador
    compras;
}

// Instância de um administrador com dados específicos
const admin = new Administrador('email@email.com', 'senha', 'Jose', [1,6]);

// Instância de um comprador sem dados específicos
const comprador = new Comprador();

// Instância de um usuário com dados específicos
const usuario = new Usuario('email', 'senha', 'nome');

// Modificando a senha do comprador
comprador.senha = 'senha123';

// Testando e exibindo resultados das validações de senha
console.log(usuario.validarSenha('email', 'senha'));
console.log(admin.validarSenha('email@email.com', 'senha'));
