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

//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 !== 0) console.log(i)
//     i++
//   }

// for (let i = 2; i <= 16; i++) {
//       if (i % 2 === 0) {
//           continue;
//       } else {
//           console.log(i);
//       }
//   }

// let d = 5

// console.log(typeof(d))

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   // Пишем решение вот тут
//   for (let i = 0; i < data.length; i++) {
//       if (typeof(data[i]) == "number") data[i] = data[i] * 2
//       if (typeof(data[i]) == "string") data[i] = data[i] + ' - done'
//   }
  
//   // Не трогаем
//   return data;
// }
// console.log(secondTask())

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];

//   // Пишем решение вот тут
//   for (let i =  1; i <=  data.length; i++) {
//       result[i-1] = data[data.length - i];
//   }
  
//   // Не трогаем
//   return result;
// }

// console.log(thirdTask())

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//   for(let j = 0; j < i; j++) {
//     result +='*'
//   }

//   result += '\n';
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i < lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result +=' '
//   }

//   for(let j = 0; j < i * 2 - 1; j++) {
//     result +='*'
//   }

//   result += '\n';
// }

// console.log(result);  

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0)

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// // for (let i = 0; i < 2; i++) {
// //   const a = prompt('Один из последних просмотренных фильмов?'),
// //         b = +prompt('Насколько оцените его?');

// //   if (a != '' && b != '' && a != null && b != null && a.length < 50) {
// //     personalMovieDB.movies[a] = b;
// //   } else i--
// // }

// let i = 0;
// while (i < 2) {
//   const a = prompt('Один из последних просмотренных фильмов?'),
//         b = +prompt('Насколько оцените его?');

//   if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else i--
//   i++
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   console.log("Вы киноман")
// } else console.log("Произошла ошибка")

// console.log(personalMovieDB)

// 26.10

let numberOfFilms;

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

rememberMyFilms();
detectPerconalLevel();
showMyBD(personalMovieDB.privat);
writeYourGenres()

console.log(personalMovieDB)

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = +prompt('Насколько оцените его?');
  
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b; 
    } else i--
  }
}

function detectPerconalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман")
  } else console.log("Произошла ошибка")
}

function showMyBD(hidden) {
  if (!hidden) console.log(personalMovieDB)
}

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`)
  }
}