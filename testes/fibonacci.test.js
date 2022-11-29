const fibonacci = require("../funcoes/fibonacci");

test('Os 10 primeiros numeros da contagem devem ser os corretos', () => {
    var quantidade_numeros = 10;
    expect(fibonacci(quantidade_numeros)).toBe(`0,1,1,2,3,5,8,13,21,34`);
})

test('Os 2 primeiros numeros da contagem devem ser os corretos', () => {
    var quantidade_numeros = 2;
    expect(fibonacci(quantidade_numeros)).toBe(`0, 1`);
})