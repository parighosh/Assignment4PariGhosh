let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor (title, rating, haveWatched){
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
    }    
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie1);
    console.log("A new movie is added")
}


//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    var i;
    
    console.log("Printing all the movies...");
    for (i = 0; i < allMovies.length; i++ ){
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating  + ", havewatched: " + allMovies[i].haveWatched);
    }
    console.log("\nYou have " + allMovies.length + " movies in total")
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    var i;
    var counter = 0;
    for (i = 0; i < allMovies.length; i++) {
        if (rating < allMovies[i].rating) {
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating)
            counter++;
        }
    }
    console.log("\nIn total, there are " + counter + " matches")
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {

    console.log("changing the status of the movie...")


    var i;

    for (i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            if (!allMovies[i].haveWatched) {
                allMovies[i].haveWatched = true;
            } else {
                allMovies[i].haveWatched = false;
            }
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);
