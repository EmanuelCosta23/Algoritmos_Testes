const numeroPrimo = require("../funcoes/numeroPrimo");

test('O numero 5 tem que ser primo', () => {
    var numero = 5;
    expect(numeroPrimo(numero)).toBe(`${numero} eh primo.`);
});

test('O numero 4 nao pode ser primo', () => {
    var numero = 4;
    expect(numeroPrimo(numero)).toBe(`${numero} nao eh primo.`);
});