function calcular(valor) {
    if (valor == 0) {
        throw new Error("Valor não pode ser 0");
    }

    return valor / 2;
}

try {
    const resultado = calcular(0);
    console.log('resultado: ', resultado);    
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Sempre executa');
}

console.log('fim do programa');