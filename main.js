// var z = 21
// let x = 22
// const c = false

// z = '45'

// x = null

// console.log(z, typeof(z), z)
// console.log(x, typeof(x), x)
// console.log(typeof c)

// let x = 465

// if (typeof x == 'number') {
//   console.log('ok')
// } else {
//   console.log('ne ok')
// }

// let x = 465

//   console.log(true && null)

// function x(num, kek) {
//   return num - kek
// }

// console.log(x(14, 23))
// x("Yura", 16, 'dg');
// console.log(z)

// function x(name, year, ...ff) {
//   return (z = {
//     name: name,
//     age: year.toString(),
// //     sd: function c(){
//       console.log([ff])
//     }
//   });

// }

// x('Yura', 17, 'fp', 23, 'mass');

// console.log(z.name)
// console.log(z['age'])
// console.log(z)
// console.log(z.programmer = true)
// console.log(z)

// z.sd()

// let n = 21

// console.log(toString())

// function x(yeadr, num) {
//   return 2023 - yeadr - num;
// }

// function y(yearg, sss) {
//   return x(yearg, sss);
// }

// console.log(y(2005, 20));

// const cars = [1, 2, 3];

// console.log(cars);
// console.log(cars.length);
// cars[cars] = 9;

// console.log(cars);

// const cars = ['abc', 'pop', 'pon'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (car of cars) {
//   console.log(car);
// }

// ___________________________________ Number

// const float = '0.4'

// console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// console.log(32n / 5n);
// console.log(Math.abs(-21));

// let nam = (Math.random() * 100).toFixed(0);
// let number = parseInt();
// let CheckNum = () => {
//   if (typeof nam === "number") {
//     console.log("This is a number");
//   } else if (typeof nam === "string") {
//     console.log("This is a string");
//   }
// };

// console.log(number(nam));

// CheckNum();

// console.log(typeof nam);

// let random = (first, second) => {
//   let min = Math.random() * 100;
//   let max = Math.random() * (200 - 100) + 100;
//   console.log(Math.random() * (max - min) + min);

//   return Math.random() * (second - first) + first;
// };
// console.log(random(70, 200));

// let random = (first, second) => {
//   return Math.random() * (second - first) + first;
// };

// console.log(random(50, 100));

// _________________________________ Strings

// const x = 'ra';

// console.log(`Yu \/ ` + `${x}`)

// const space = "   asd  asd  asd  asd   "

// console.log(space.trim())

// ________________________________________ Function

// var y = function x(name) {
//   console.log(name);
// };

// y('ok');

// let num = ['Л', 'ю', 'ь', 'т', 'и', 'п', 'о', 'н'];
// let i = 0;

// const clearTime = setInterval(function timeI() {
//   console.log(num[i++]);
//   if (i == num.length) {
//     clearInterval(clearTime);
//     console.log('Конец');
//   }
// }, 1000);

// let pow = (first, second) => {
//   return console.log(Math.pow(first, second)), console.log(first ** second);
// };
// pow(5, 2);

// ___________________________________________________________________________________________ arrays

// const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес'];
// const text = 'adsasdasd asdadasd asdasdasd'

// cars.push('BMW');
// cars.unshift('Reno');

// console.log(cars.shift());
// cars.reverse()
// console.log(cars.pop());

// text.split('a')
// console.log(text)
// console.log(cars);

// ______________________________________________________________________________________________________ Object

// for (const key in person) {
//   console.log(`${key}:`, person[key])
// }

// const person = {
//   name: 'Yura',
//   age: 17,
//   language: ['ru', 'ua'],
// };

// const person2 = {
//   name: 'Yurs',
//   age: 19,
//   language: ['ru', 'en', 'ua', 'pl'],
// };

// // const logger = {
// //   keysAndValues() {
// //     const self = this
// //     Object.keys(self).forEach(function(key) {
// //       console.log(`"${key}": ${self[key]}`);
// //     });
// //   },
// // };
// const keysTime = (obg) => {
//   for (let i = 0; i < Object.keys(obg).length; i++) {
//     const interval = setTimeout(() => {
//       const keys = Object.keys(obg);
//       const values = Object.values(obg);
//       console.log(`${keys[i]}: ${values[i]}`);
//     }, i * 1000);
//   }
// };

// // keysTime();

// keysTime(person2);

// __________________________________________________________________________ asynchrony

// let i = 10;

// const num = [
//   'Один',
//   'Два',
//   'Три',
//   'Четыри',
//   'Пять',
//   'Шесть',
//   'Семь',
//   'Восьем',
//   'Девять',
//   'Десять',
// ];

// // // num.reverse()

// // // console.log(num.indexOf('Четыри'))

// const arrays = () => {
//   for (let i = 0; i < num.length; i++) {
//     setTimeout(() => {
//       if (num.indexOf('Десять') == 0) {
//         console.log(num[i], num.indexOf(num[10 - i]));
//       } else {
//         console.log(num[i], num.indexOf(num[i + 1]));
//       }
//     }, i * 1000);
//   }
// };

// arrays()

// const call = () => {
//   const interval = setInterval(() => {
//     console.log(`End ${i--}:`);
//     if (i <= 0) {
//       clearInterval(interval)
//     }
//   }, 1000);
// };

// call(1000);
