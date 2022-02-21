const movieArr = [];

// class Movie {
//     //Optional argument. No let in a constructor method
//     constructor(title, actor = "Not specified") {
//         //don't remove title from constructor
//         this.title = title;
//         this.actor = actor;
//     }
//     add() {
//         movieArr.push(this);
//         return movieArr;
//     }
// }

class Movie {
    //Optional argument. No let in a constructor method
    constructor(title, actor = "Not specified") {
        //don't remove title from constructor
        this.title = title;
        this.actor = actor;
    }
    add() {
        movieArr.push(this);
        return movieArr;
        // return this;
    }
}

// module.exports =  { Movie, movieArr };
module.exports =  Movie;