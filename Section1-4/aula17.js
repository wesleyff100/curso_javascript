
function teste(key) {
    switch (key) {
        case 'Julio':
            console.log('Julio aqui');

            break;

        case 'Jose':
            console.log('Jose aqui');
            break;
        
        case 'João':
            console.log('João aqui');

        default:
            console.log('Ninguem aqui');
            break;

    }
}

console.log(teste('Julio'));
