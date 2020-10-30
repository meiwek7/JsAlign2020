// 1) Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

// let age = prompt("Enter your age:");

// if(age>=0 && age<=2)
//     alert("Rebenok!");
//     else if(age>=12 && age<18)
//         alert("Podrostok!");
//         else if(age>=18 && age<60)
//             alert("Vzrosliy");
//             else if(age >= 60)
//                 alert("Pensioner");
//                 else
//                     alert("invalid Data!");

// 2)Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

// let number = prompt("Enter the digit from 0 to 9:");

// switch(Number(number)){
//     case 0:
//         alert(")");
//         break;
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     default:
//         alert("invalid number");
// }

// 3)Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

// let number = prompt("Enter 3-x number");
// let firstDigit = Math.floor(number/100) % 10;
// let secondDigit = Math.floor(number/10) % 10;
// let thirdDigit = number % 10;

// if(firstDigit == secondDigit || firstDigit == thirdDigit || secondDigit == thirdDigit)
//     alert("Odinakoviye yest!");
// else
//     alert("Odinakovix net!");

// 4) Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.

// let year = prompt("Please, enter year");

// if((year % 400) == 0 || ((year % 4) == 0 && ((year%100)!=0)))
//     alert("Your year is leap");
// else 
//     alert("Your year is not leap");

// 5)Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.

// let number = prompt("Enter your 5-x digit number:");

// let palindrom = number.split("").reverse().join("");

// if(number == palindrom)
//     alert("Your number is palindrom");
// else
//     alert("Not palindrom");

// 6)Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

// let dol = prompt("Enter your dollars amount:");

// let choose = prompt("Please enter UAH or EUR or AZN to conver to desired currency");

// switch(choose){
//     case "UAH":
//         alert("You will receive "+dol*28.3+" UAH");
//         break;
//     case "EUR":
//         alert("You will receive "+dol*0.84+" EUR");
//         break;
//     case "AZN":
//         alert("You will receive "+dol*1.7+" AZN");
//         break;
// }

// 7)Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

// let sumPurch = prompt("Enter sum of yours purchases");

// switch(true){
//     case (sumPurch>=200 && sumPurch < 300):
//         alert("You must pay "+(sumPurch-(sumPurch*0.03)));
//         break;
//     case (sumPurch>=300 && sumPurch < 500):
//         alert("You must pay "+(sumPurch-(sumPurch*0.05)));
//         break;
//     case (sumPurch>=500):
//         alert("You must pay "+(sumPurch-(sumPurch*0.07)));
//         break;
// }

// 8)Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поме-
// ститься в указанный квадрат.

// let length = prompt("Enter length of circle");

// let perimeter = prompt("Enter perimeter of square");

// let squareSide = perimeter/4;

// let diametr = length/3.14;

// if(squareSide >= diametr)
//     alert("Square can be placed in given circle");
// else
//     alert("Square can`t be placed in given circle");

// 9)Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
// рианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.

// alert("Please, answer three questions\n");

// let counter = 0;

// let answer = prompt("Type the number of an answer, please:\n"+
//                     "First one:\nIs JS more suitable for imperative or declarative style as a programming language?\n"+
//                     "1) Imperative\n"+
//                     "2) Declarative\n"+
//                     "3) JavaScript allows for various programming styles. Most programmers use imperative style, but the language also allows declarative style.");

// if(answer == 3 || answer == "3)")
//     counter+=2;

// answer = prompt("Type the number of an answer, please:\n"+
//                 "Second one:\nWhat will be the output of this code?\nvar x = 21;\nvar girl = function () {\nconsole.log(x);\nvar x = 20;\n};\ngirl ();\n"+
//                 "1) 20\n"+
//                 "2) 21\n"+
//                 "3) undefined");

// if(answer == 3 || answer == "3)")
//     counter+=2;

// answer = prompt("Type the number of an answer, please:\n"+
//                 "Second one:\nWhich Came First, the Chicken or the Egg?\n"+
//                 "1) Chicken\n"+
//                 "2) Egg\n"+
//                 "3) Both options");

// if(answer == 2 || answer == "2)")
//     counter+=2;

// alert("Thank you, you get "+counter+" points");

// 10) Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.

let userDate = prompt("Please enter date in format like that:\n14, 02, 1996");

let days = userDate.slice(0,2);
let month = userDate.slice(4,6);
let year = userDate.slice(8);

let userDateFormated = new Date(year, month-1, days);

let nextDay = new Date(userDateFormated.valueOf()+86400000);

alert("Your date is:\n"+userDateFormated+"\nNext date is:\n"+nextDay);