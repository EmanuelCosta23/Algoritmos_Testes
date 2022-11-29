const mdc = require('../funcoes/mdc');

test('MDC entre 20 e 10', () => {
    expect(mdc(4, 12)).toBe('O MDC de 4 e de 12 é 4');
})

test('MDC entre 2 e 5', () => {
    expect(mdc(2, 5)).toBe('O MDC de 2 e de 5 é 1');
})