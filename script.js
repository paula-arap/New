const numberOfFilms = +prompt('How many films have you watched ?', '');

const personalMoviesDB = {
    count: numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('What is the last film have you watched ?', ''),
      b = prompt('How to you rate it ?', ''),
      c = prompt('What is the last film have you watched ?', ''),
      d = prompt('How to you rate it ?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;
console.log(personalMoviesDB);