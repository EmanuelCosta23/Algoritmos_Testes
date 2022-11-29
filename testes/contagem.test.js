const contagem = require('../funcoes/contagem');

test('Contagem com 4 termos', () => {
    expect(contagem(4, [60, 10, 70, 40])).toBe('Número de alunos que passaram no exame: 2')
})

test('Contagem com 6 termos', () => {
    expect(contagem(6, [50, 10, 70, 40, 90, 100])).toBe('Número de alunos que passaram no exame: 4')
})