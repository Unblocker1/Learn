'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0)

console.log(numberOfFilms)

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const a = prompt('Один из последних просмотренных фильмов?'),
      b = +prompt('Насколько оцените его?')
      c = prompt('Один из последних просмотренных фильмов?'),
      d = +prompt('Насколько оцените его?')

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)