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
// const min = 55;

// if (min <= 15) {
//     console.log('First part hour');
// } else if (min > 15 && min <= 30) {
//     console.log('Second part hour');

// } else if (min > 30 && min <= 45) {
//     console.log('Thrird part hour');
// } else {
//     console.log('Fourth part hour');
// }

//Елси число делиться на 3 возвращать
//fizz если делиться на 5 возвращать buzz
//елси делиться на 3 и на 5 возвращить fizzbuzz



// function fizzBuzz(num) {
//     console.log(num);
//     for (let i = 0; i <= num; i += 1) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzBuzz');
//         } else if (i % 3 === 0){
//            console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(64);



const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];
//1.Реализовать фильтер по свойству amount и получить
//только название модели
// const getAvailableCarNames = (cars, amountThreshold) => {
    
//     return cars.filter(({amount}) => amount > amountThreshold).map(({model}) => model)

// }

// const getAvailableCarNames = (cars, amountThreshold) => {
    
//   return cars.reduce((acc, car) => {
//     if (car.amount > amountThreshold) {
//       return [...acc, car.model]
//       // acc.push(car.model)
//     }
//     return acc
//   }, [])

// }
// console.table(getAvailableCarNames(vehicles, 12));

//2.Получить машины на распродаже и сортировать по убыванию цены

// const getSortedCarsOnSale = (cars) => { return cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price) };

// console.table(getSortedCarsOnSale(vehicles));

//3. Необходимо написать функцию (isEqualSymbols), принимающую
//в аргументах две строки и возвращающую true, если эти строки
//состоят из идентичных букв и false в противном случае.
//isEqualSymbols('кот', 'ток'); // выведет true
//isEqualSymbols('кот', 'тик'); // выведет false

const isEqualSymbols = (string1, string2) => {
    const string1ToArray = [...string1].sort((a, b) => a.localeCompare(b));
    const string2ToArray = string2.split('').sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < string1ToArray.length; i += 1) {
        if (string1ToArray[i] !== string2ToArray[i]) {
            return false;
        } 
    }

    return true;

    console.log(string2ToArray);
    console.log(string1ToArray);
}

console.log(isEqualSymbols('кот', 'тик'))