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

4)