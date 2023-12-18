// Leia um valor inteiro X e em seguida apresente os 6 valores impares consecutivos a partir de X, um valor por linha, inclusive o X se for o caso.

console.log("Digite um número inteiro: ");

const numero = 8;

function impar(numero){
    for(let i = numero; i <= numero + 12; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

console.log(impar(numero));