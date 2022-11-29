const quicksort = require('../funcoes/quicksort');

test('Ordenacao de 5 valores', () => {
    expect(quicksort(5, [6, 3, 9, 1, 8])).toStrictEqual([ 1, 3, 6, 8, 9 ])
})

test('Ordenacao de 10 valores', () => {
    expect(quicksort(10, [34, 87, 6, 3, 25, 9, 100, 1, 8, 64])).toStrictEqual([ 1, 3, 6, 8, 9, 25, 34, 64, 87, 100 ])
})