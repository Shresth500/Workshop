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

// EXERCISE: Created AnimatedMovie as a derived class of Movie
class AnimatedMovie extends Movie {
    constructor(name, cast, boxOfficeCollection, yearOfRelease, dubbingArtists = []) {
        super(name, cast, boxOfficeCollection, yearOfRelease);

        this.dubbingArtists = dubbingArtists;
    }

    // accepts artists array
    addDubbingArtists(artists) {
        this.dubbingArtists.push(...artists);
    }
}

// method - addDubbingArtists()

const kalki = new AnimatedMovie('Kalki 2000', ['Amitabh'], 1000, undefined, ['Amitabh']);
kalki.addToCast('Prabhas');
kalki.addToCollection(200);
kalki.addDubbingArtists(['Artist 1', 'Artist 2']);

console.log(kalki);