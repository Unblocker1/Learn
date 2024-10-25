'use strict'

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0)

// console.log(numberOfFilms)

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// const a = prompt('Один из последних просмотренных фильмов?'),
//       b = +prompt('Насколько оцените его?')
//       c = prompt('Один из последних просмотренных фильмов?'),
//       d = +prompt('Насколько оцените его?')

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB)

  let i = 2;

  while (i <= 16) {
    if (i % 2 !== 0) console.log(i)
    i++
  }

for (let i = 2; i <= 16; i++) {
      if (i % 2 === 0) {
          continue;
      } else {
          console.log(i);
      }
  }

let d = 5

console.log(typeof(d))

function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
  for (let i = 0; i < data.length; i++) {
      if (typeof(data[i]) == "number") data[i] = data[i] * 2
      if (typeof(data[i]) == "string") data[i] = data[i] + ' - done'
  }
  
  // Не трогаем
  return data;
}
console.log(secondTask())

function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
  for (let i =  1; i <=  data.length; i++) {
      result[i-1] = data[data.length - i];
  }
  
  // Не трогаем
  return result;
}

console.log(thirdTask())