// 1) Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».

let name = prompt("Enter your name");

alert("Hello, "+name+"!");

// 2) Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.

const CUR_YEAR = 2020;

let userBirthDate = prompt("Enter the year of your birth");

alert("Your age is: "+(CUR_YEAR-userBirthDate));

// 3) Запросите у пользователя длину стороны квадрата и вы-
// ведите периметр такого квадрата.

let side = prompt("Enter the side of a square:");

alert("Perimeter is: "+(side*4));

// 4) Запросите у пользователя радиус окружности и выведите
// площадь такой окружности.

let length = prompt("Enter radius of a circle");

const PI_NUMBER = 3.14;

alert("Your space of a circle ="+(PI_NUMBER*(length**2)));

// 5) Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчи-
// тайте скорость, с которой необходимо двигаться, чтобы
// успеть вовремя.

let distance = prompt("Enter distance beetwen two cities:");

let time = prompt("Enter hours:");

alert("You must move with "+distance/time+"km/h speed");

// 6) Реализуйте конвертор валют. Пользователь вводит долла-
// ры, программа переводит в евро. Курс валюты храните в
// константе.

const EURO_RATE_TO_DOLLAR = 0.87;

let dollars = prompt("Enter amount of dollars to convert to euro:");

alert("You will receive "+dollars*EURO_RATE_TO_DOLLAR+" euro");

// 7)Пользователь указывает объем флешки в Гб. Программа
// должна посчитать сколько файлов размером в 820 Мб по-
// мещается на флешку.

let capacity = prompt("Enter capacity of flash drive:");

alert("You can place "+Math.floor(capacity/820)+" files on your USB stick");

// 8)Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется.

let money = prompt("Enter amount of money:");

let price = prompt("Enter price of chocolates");

alert("You can buy "+Math.floor(money/price)+" chocolat(es)");

// 9)Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).

let number = prompt("Enter 3-x number");

alert(Math.floor(number%10)+""+Math.floor(number/10)%10+""+Math.floor(number/100%10));

// 10)Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.

let number = prompt("Enter int number, please");

let evenOrNot = (number%2) ? "not even" : "even";

alert("Your number is "+evenOrNot);