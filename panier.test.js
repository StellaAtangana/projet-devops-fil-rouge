const { calculerTotal } = require('./panier');

test('retourne le prix normal si le prix est inférieur ou égal à 100', () => {
    const prix = 50;
    const result = calculerTotal(prix);
    expect(result).toBe(50);
});
test('appliquons une réduction de 20%', () =>{
    const prix = 200;
    const result = calculerTotal(prix);
    expect(result).toBe(160);
});