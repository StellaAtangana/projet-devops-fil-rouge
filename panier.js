function calculerTotal(prix) {
    if (prix > 100) {
    return prix * 0.8;
    }
    return prix;
}

module.exports = { calculerTotal };