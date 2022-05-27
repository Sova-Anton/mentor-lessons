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

// task-4
// Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

// const inputLogin = prompt("Дай логін");
// console.log(`Твій логін ${inputLogin}`);

// switch (inputLogin) {
//     case "Admin":
//         const inputPass = prompt("Дай Пароль");
//         switch (inputPass) {
//             case "Я главный":
//                 console.log("Здравствуйте!");
//                 break;
//             default:
//                 console.log("Неверный пароль!");
//         }
//         break;
//     case null:
//         console.log("Отменено");
//         break;
    
//     default:
//         console.log("Я вас не знаю");
        
// }

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

// task-5
//При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let input = prompt('Уведіть число');
// let total = 0;


// while (input) {
//     console.log('Сума', total += Number(input));
//     input = prompt('Уведіть число');
// }
// console.log(total);



//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let input = prompt("enter the number over 100");

// while (Number(input) < 100 && input !== null) {
//     input = prompt("enter the number over 100");
// }
// console.log(input);

// TASK 7
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).
const min = 55;

if (min <= 15) {
    console.log('First part hour');
} else if (min > 15 && min <= 30) {
    console.log('Second part hour');

} else if (min > 30 && min <= 45) {
    console.log('Thrird part hour');
} else {
    console.log('Fourth part hour');
}

