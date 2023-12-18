/*
Questão: Dado um número inteiro não negativo n, escreva uma função recursiva para calcular a soma dos números de 1 até n.

Entrada: Um número inteiro não negativo n (0 <= n <= 100).

Saída: O valor da soma dos números de 1 até n.
*/
process.stdin.setEncoding('utf8');

const soma = (valor) => {
    if (valor === 0) {
        return 0;
    }
    return valor + soma(valor - 1);
}

process.stdin.on('data', function(data) {
    // Assuming you want to use the input value for the calculation
    const inputValue = parseInt(data.trim(), 10);

    // Check if the input is a valid number
    if (!isNaN(inputValue)) {
        console.log('soma', soma(inputValue));
    } else {
        console.log('Please enter a valid number.');
    }

    // End the process after receiving input
    process.exit();
});
