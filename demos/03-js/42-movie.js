class Movie {
    // name;
    // cast = [];
    // boxOfficeCollection = 0;
    // yearOfRelease = (new Date()).getFullYear();

    constructor(name, cast = [], boxOfficeCollection = 0, yearOfRelease = (new Date()).getFullYear()) {
        this.name = name;
        this.cast = cast;
        this.boxOfficeCollection = boxOfficeCollection;
        this.yearOfRelease = yearOfRelease;
    }

    addToCast(name) {
        this.cast.push(name);
    }

    addToCollection(amount) {
        this.boxOfficeCollection += amount;
    }
}

const kalki = new Movie('Kalki 2000', ['Amitabh'], 1000);
kalki.addToCast('Prabhas');
kalki.addToCollection(200);

console.log(kalki);

// EXERCISE: Created AnimatedMovie as a derived class of Movie
// data member -> dubbingArtists
// method - addDubbingArtists()