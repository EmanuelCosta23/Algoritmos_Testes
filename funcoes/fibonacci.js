function fibonacci(quantidade_numeros){
    var t1 = 0;
    var t2 = 1;
    var t3;
    
    if (quantidade_numeros <= 0){
        return `{}`;
    } else if (quantidade_numeros == 1) {
        return `0`;
    } else if (quantidade_numeros == 2) {
        return `0, 1`;
    }

    var numeros = [0, 1];
    for (var i = 2; i < quantidade_numeros; i++) {
        t3 = t1 + t2;
        t1 = t2;
        t2 = t3;
        numeros.push(t3);
    }

    return `${numeros}`;    
}

module.exports = fibonacci;