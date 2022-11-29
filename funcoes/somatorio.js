function somatorio(numeros){
    var soma = 0;
    
    for(var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    if(numeros.length > 1){
        return `A soma dos numeros ${numeros} eh ${soma}.`;
    }else if(numeros.length <= 1){
        return `Nao ha soma, pois ha um ou nenhum numero.`;
    }
}

function soma(numeros){
    var soma = 0;
    
    for(var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    return soma;
}


module.exports = {
    somatorio,
    soma,
}    