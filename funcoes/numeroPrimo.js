function numeroPrimo(numero){

    var cont = 0;

    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            cont++;
        }    
    }
    
    if (cont == 0) {
        return `${numero} eh primo.`;
    } else {
        return `${numero} nao eh primo.`;
    }
}    

module.exports = numeroPrimo;