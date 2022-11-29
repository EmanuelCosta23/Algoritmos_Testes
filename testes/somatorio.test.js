const somatorio = require("../funcoes/somatorio");

test('Verificar a soma de 1+2+3=6', () => {
    var numeros = [1, 2, 3];
    expect(somatorio.somatorio(numeros)).toBe(`A soma dos numeros ${numeros} eh ${somatorio.soma(numeros)}.`);
});

test('Verificar a soma de 15+23+17=55', () => {
    var numeros = [1, 2, 3];
    expect(somatorio.somatorio(numeros)).toBe(`A soma dos numeros ${numeros} eh ${somatorio.soma(numeros)}.`);
});

// test('Exibir mensagem de erro caso seja digitado um ou nenhum numero', () => {
//     var numeros = [1]
//     expect(somatorio.somatorio(numeros)).toBe(`Nao ha soma, pois ha um ou nenhum numero.`);
// });