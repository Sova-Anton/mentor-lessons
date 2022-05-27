//Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// let input = prompt("Какое официальное название JavaScript?");
// if (input === "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }

//Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
/*const input = 70;
const hours = Math.floor(input / 60);
const minutes = input % 60;
const modifyHours = String(hours).padStart(2, 0);
const modifyMinutes = String(minutes).padStart(2, 0);


// console.log(modifyMinutes);
console.log(`${modifyHours}:${modifyMinutes}`);*/

//Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 25;
// let total = 0;
// for (let i = max; i >= min; i -= 1){

//     if (i % 2 !== 0) {
//        continue
//     }
//     total += i;
// }
// console.log(total);

// Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

const inputLogin = prompt("Дай логін");
console.log(`Твій логін ${inputLogin}`);

switch (inputLogin) {
    case "Admin":
        const inputPass = prompt("Дай Пароль");
        switch (inputPass) {
            case "Я главный":
                console.log("Здравствуйте!");
                break;
            default:
                console.log("Неверный пароль!");
        }
        break;
    case null: 
        console.log("Отменено");
        break;
    
    default:
        console.log("Я вас не знаю");   
        
}

// if (inputLogin === "Admin") {
//     const inputPass = prompt("Дай Пароль");
//     if (inputPass === "Я главный") {
//         console.log("Здравствуйте!");
//     } else {
//         console.log("Неверный пароль!");
//     }
    
    
// } else if (inputLogin === null) {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }



//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин");
