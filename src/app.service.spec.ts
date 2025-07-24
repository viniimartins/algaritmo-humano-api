
describe('Teste direto com console.log', () => {
  it('deve rodar um console.log', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    console.log('Rodando teste');
    expect(consoleSpy).toHaveBeenCalledWith('Rodando teste');
  });
});
