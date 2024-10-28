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

// 26.10 практика ч3

// let numberOfFilms;

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// rememberMyFilms();
// detectPerconalLevel();
// showMyBD(personalMovieDB.privat);
// writeYourGenres()

// console.log(personalMovieDB)

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
//   }
// }

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?').trim(),
//           b = +prompt('Насколько оцените его?');
  
//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//       personalMovieDB.movies[a] = b; 
//     } else i--
//   }
// }

// function detectPerconalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count > 30) {
//     console.log("Вы киноман")
//   } else console.log("Произошла ошибка")
// }

// function showMyBD(hidden) {
//   if (!hidden) console.log(personalMovieDB)
// }

// function writeYourGenres() {
//   for (let i = 1; i < 4; i++) {
//     personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`)
//   }
// }

// function calculateVolumeAndArea(a) {
//   return `Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`
// }
// console.log(calculateVolumeAndArea(5))

// function getCoupeNumber(a) {
//   if (typeof(a) != 'number' || a < 0 || !Number.isInteger(a)) return console.log("Ошибка. Проверьте правильность введенного номера места")

//   if (a === 0 || a > 36) return console.log("Таких мест в вагоне не существует")

//   return Math.ceil(a / 4)
// }
// getCoupeNumber(33)
// getCoupeNumber(7)
// getCoupeNumber(300)
// getCoupeNumber(0)
// getCoupeNumber(7.7)
// getCoupeNumber(-10)
// getCoupeNumber('Hello')

// // Место для первой задачи
// function getTimeFromMinutes(count) {
//   if (count < 0 || !Number.isInteger(count) || typeof(count) != 'number') return "Ошибка, проверьте данные"
//   let hours = Math.floor(count/60),
//       minutes = count%60;
//   if (hours === 1) return `Это 1 час и ${minutes} минут`
//   if (hours > 1 && hours < 5 ) return `Это ${hours} часа и ${minutes} минут`
//   return `Это ${hours} часов и ${minutes} минут`
  
// }
// console.log(getTimeFromMinutes(150))

// // Место для второй задачи
// function findMaxNumber(a,b,c,d) {
//   if ( typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') return 0
//   return Math.max(a,b,c,d)
// }

// console.log(findMaxNumber(1, 5, 6.6, 11))

// console.log(typeof('5', 5, '1'))

// function fib(num) {
//   if (typeof(num) != 'number' || num <= 0 || !Number.isInteger(num)) return '';

//   let first = 0,
//         second = 1,
//         res = ''
  
//   for (let i = 0; i < num; i++) {
//     if(i + 1 === num) {
//       res += `${first}`
//     }
//   }
// }

// const options = {
//   name: 'test',
//   widht: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log('Ky')
//   }
// }

// options.makeTest()

// const {border, bg} = options.colors

// // for (let key in options) {
// //   if (typeof(options[key]) === 'object') {
// //     for( let i in options[key]) {
// //       console.log(`Свойство ${i}: ${options[key][i]}`)
// //     }
// //   } else console.log(`Свойство ${key}: ${options[key]}`)
// // }

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'
//   },
//   showAgeAndLangs: function(obj) {
//     let {age} = obj.age;
//     let {languages} = obj.skills;
//     let res = `Мне ${age} и я владею языками:`;
    
//     languages.forEach(function(elem) {
//         res += ` ${elem.toUpperCase()}`
//     })
//     return res
// }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// function showExperience(plan) {

// }

// function showProgrammingLangs(plan) {
//   const {programmingLangs} = plan.skills;
//   let res = '';
//   for (let i in programmingLangs) {
//       res+= `Язык ${i} изучен на ${programmingLangs[i]} `
//   }
//   return res
// }

// console.log(showProgrammingLangs(personalPlanPeter))

// const num = [1, 3, 5]

// function log(a, b, c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// log(...num)

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     return arr.join('\n').toLowerCase()
// }

// console.log(standardizeStrings(favoriteCities))

// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str != 'string') return "Ошибка!"
//   return str.split('').reverse().join('')
// }

// console.log(reverse(someString))

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// let arr = baseCurrencies.concat(...additionalCurrencies)


// function availableCurr(arr, missingCurr) {
//   if (arr.length === 0) return 'Нет доступных валют'
//   let res = 'Доступные валюты:\n';

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === missingCurr) continue
//     res += `${arr[i]}\n`
//   }
//   return res
// }

// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'))

// 28.10

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log("Hi")
//   }
// };

// const john = Object.create(soldier)

// // const john = {
// //   health: 100
// // }

// // john.__proto__ = soldier; //Устаревший формат. soldier стал прототипом john

// Object.setPrototypeOf(john, soldier)

// john.sayHello()

// //практика часть 4

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function() {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')

//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
//     }
//   },
//   rememberMyFilms: function() {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?').trim(),
//             b = +prompt('Насколько оцените его?');
    
//       if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b; 
//       } else i--
//     }
//   },
//   detectPerconalLevel: function() {
//     if (personalMovieDB.count < 10) {
//       console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//       console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//       console.log("Вы киноман")
//     } else console.log("Произошла ошибка")
//   },
//   showMyBD: function(hidden) {
//     if (!hidden) console.log(personalMovieDB)
//   },
//   toggleVisibleMyBD: function() {
//     (personalMovieDB.privat === false) ? personalMovieDB.privat = true : personalMovieDB.privat = false
//   },
//   writeYourGenres: function() {
//     for (let i = 1; i < 4; i++) {
//       let genre = prompt(`Ваш любимый жанр под номером ${i}`)

//       if (genre == null || genre === '') i-- 

//       personalMovieDB.genres[i-1] = genre;
//     }
//     personalMovieDB.genres.forEach((name, num) => {
//       console.log(`Любимы жанр ${num+1} - это ${name}`)
//     });
//   }
// }

// personalMovieDB.writeYourGenres()

// const shoppingMallData = {
//   shops: [
//       {
//           width: 10,
//           length: 5
//       },
//       {
//           width: 15,
//           length: 7
//       },
//       {
//           width: 20,
//           length: 5
//       },
//       {
//           width: 8,
//           length: 10
//       }
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000
// }

// function isBudgetEnough(data) {

//   let S = 0;

//   data.shops.forEach(shop => {
//     S += shop.width * shop.length
//   });

//   let pay = S * data.height * data.moneyPer1m3;

//   if (data.budget < pay) return 'Бюджета недостаточно'
//   return 'Бюджета достаточно'
// }

// console.log(isBudgetEnough(shoppingMallData))

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//   arr.sort()
//   const a = [], b = [], c = [], rest = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       a.push(arr[i])
//     } else if (i < 6) {
//       b.push(arr[i])
//     } else if (i < 9) {
//       c.push(arr[i])
//     } else rest.push(arr[i])
//   }
//   return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students))

// const result = getSum(5, 6);
// const getSum = function(a, b) {
//     return a + b;
// }

const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '17$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Открыто' : answer = 'Закрыто';

  return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if ((parseInt(fDish.price) + parseInt(sDish.price)) < parseInt(average)) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[3], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{name: 'Mike', age: 32}];
  return copy;
}

console.log(transferWaitors(restorantData));