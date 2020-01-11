'use strict';
//var ferst = 1; //переменная существует везде в коде

//let second = 2;//переменная создается только тогда, когда код до нее доходит.
//видна только в блоке кода, ограниченного фигурными скобками.

//const pi = 3.14;//создает константу, которую нельзя поменять
//( только обходными путями ).А в остальном схожа с " let ".

//NaN// Not a number -числовой тип данных

//Infinity// Какое-то бесконечное чило. Числовой тип данных.

//var sym = Symbol()// ES6 новый тип данных - символ.

//Null// Ошибка в коде. Ссылка на какую то не существующую вещь.

//undefined// Выводится тогда, когда нет значения.




let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);

console.log(persone['name']);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr['1']);

//let answer = confirm("Are you here?");// Выводит модальное окно с вариантами 
//ответа.
//console.log(answer);

// let answer = +prompt("Усть ли вам 18?", "Да");

//console.log(typeof(answer));// Проверка на тип данных.

//console.log(answer);

// console.log("arr" + " - object");
// console.log(4 + " - object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" == 2);


let isChecked = true,
    isClose = false;

console.log(isChecked || isClose);