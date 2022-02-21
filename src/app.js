// console.log(process.argv[2]);

// const app = (args) => {
//     switch(args[2]) {
//         case "add":
//             // take user input movie, add to array and console log that array
//             break;
//         case "Gary":
//             console.log("You typed Gary");
//             break;
//         default:
//             console.log("Not Steve or Gary");
//             break;
//     }
// }

const Movie = require("./utils");

// const app = (args) => {
//     switch(args[2]) {
//         case "add":
//             const movie = new Movie(args[3], args[4]);
//             // const output = movie.add();
//             console.log(movie.add());
//             // take user input movie, add to array and console log that array
//             break;
//         default:
//             console.log("Incorrect input");
//             break;
//     }
// }

const app = (args) => {
    // const movieArr = [];
    switch(args[2]) {
        case "add":
            //create an array of the arguments without the first two, removing the last if too many
            let allMovies = args.slice(3, args.length + (args.length % 2));
            // console.log(allMovies);
            //loop over the later arguments
            for (let m = 0; m + 1 < allMovies.length; m += 2)
            {
                //create a new movie from the array positions
                let movieM = new Movie(allMovies[m], allMovies[m+1]).add();
                console.log("movieM" , movieM);

                //add this movie to the array of movies
                // movieM.add();
                // movieArr.push(movieM);
            }
            // console.log("movieArr app" , movieArr);
            break;

        default:
            console.log("Incorrect input");
            break;
    }
}

app(process.argv);