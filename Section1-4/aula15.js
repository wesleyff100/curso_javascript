process.stdin.setEncoding('utf8');

let maiorString = '';
let resultado = [];

function contarCaracteres(valor) {
    let retorno = '';
    const split = valor.split(' ');
    for (let i = 0; i < split.length; i++) {
        if (i === 0) {
            retorno = `${split[i].length}`;
        } else {
            retorno = `${retorno}-${split[i].length}`;
        }
        if (split[i].length >= maiorString.length) {
            maiorString = split[i];
        }
    }
    return retorno;
}

console.log('Digite algo: ');

process.stdin.on('data', function(data) {
    // Remove leading and trailing whitespaces
    data = data.trim();

    // Check if the input is empty
    if (data === '') {
        console.log('Nada foi digitado. Encerrando o programa.');
        process.exit(); // Terminate the program
    }
    resultado.push(contarCaracteres(data));

    console.log('Você digitou: ' + data);
    console.log('Número de caracteres em cada palavra: ' + contarCaracteres(data));
    console.log('Digite novamente:');

    // Move the loop here, inside the event listener
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i]);
    }
});
