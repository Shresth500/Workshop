const avesham = {
    name: 'Avesham',
    cast: [
        { role: 'hero', name: 'Fahad Faasil' },
        { role: 'heroine', name: 'Pooja Mohanraj' }
    ],
    boxOfficeCollection: {
        value: 100,
        units: 'INR Crores'
    },
    yearOfRelease: 2024,
    addToCast(newCastMember) {
        this.cast.push(newCastMember)
    },
};

avesham.addToCast({
    role: 'side actor',
    name: 'Someone else'
});
console.log(avesham);

avesham.addToCollection = function (freshCollectionInCrores) {
    this.boxOfficeCollection.value += freshCollectionInCrores;
};

avesham.addToCollection(50);
console.log(avesham);