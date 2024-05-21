// практическая №1

// задание 1
let tip='chipi';
let type = typeof tip;

if (type === 'number') {
    console.log("Переменная является числом.");
} else if (type === 'string') {
    console.log("Переменная является строкой.");
} else if (type === 'boolean') {
    console.log("Переменная является логическим значением.");
} else {
    console.log("Переменная имеет другой тип.");
}

// задание 2
let zodiac = prompt("Введите ваш знак зодиака:");
switch(zodiac.toLowerCase()) 
{
    case "овен":
        alert("Привет, овен!");
        break;
    case "телец":
        alert("Привет, Телец!");
        break;
    case "близнецы":
        alert("Привет, близнецы!");
        break;
    case "рак":
        alert("Привет, рак!");
        break;
    case "лев":
        alert("Привет, лев!");
        break;
    case "дева":
        alert("Привет, дева!");
        break;
    case "весы":
        alert("Привет, весы!");
        break;
    case "скорпион":
        alert("Привет, скормион!");
        break;
    case "стрелец":
        alert("Привет, стрелец!");
        break;
    case "козерог":
        alert("Привет, козерог!");
        break;
    case "водолей":
        alert("Привет, водолей!");
        break;
    case "рыбы":
        alert("Привет, рыбы!");
        break;
    
    default:
        alert("Такого знака зодиака не существует");
}

// задание 3
for (let i = 1; i <= 40; i++) 
{
    console.log(i);
}

let b = 1;
while (b <= 40) 
{
    console.log(b);
    b++;
}

let t = 1;
do 
{
    console.log(t);
    t++;
} while (t <= 40);

// задание 4

// while (true)
// {
//     alert("дал зазу!");
// }


// задание 5
let n1 = parseFloat(prompt("Введите первое число:"));
let n2 = parseFloat(prompt("Введите второе число:"));
let n3 = parseFloat(prompt("Введите третье число:"));
let numbers = [n1, n2, n3];
numbers.sort((a, b) => a - b); 
console.log("Числа по возрастанию:", numbers);

// задание 6
for (let i = 0; i <= 15; i++) 
{
    if (i % 2 === 0) 
    {
        console.log(i + ' четное');
    } 
    else 
    {
        console.log(i + ' нечетное');
    }
}

// задание 7
let w = prompt('Введите число больше 5:');
    
while (w <= 5 || isNaN(w)) 
{
    w = prompt('Повторите попытку. Введите число больше 5:');
}

alert('Поздравляем! Вы ввели правильное число: ' + w);

// задание 8
for (let i = 8; i <= 20; i++) 
{
    if (i % 2 === 0) 
    {
        console.log(i);
    }
}

// задание 9
let sum = 0;

for (let i = 0; i <= 1000; i++) 
{
    if (i % 3 === 0 || i % 5 === 0) 
    {
        sum += i;
    }
}

console.log('Сумма всех чисел:', sum);

// задание 10
let summ = 0;
let arm = prompt('введите трехзначное число: ');
let temp = arm;
while (temp > 0) {
    let promez = temp % 10;
    summ += promez **3;
    temp = parseInt(temp / 10); 
}
if (summ == arm) {
    console.log('является числом армстронга.');
}
else {
    console.log('не является числом армстронга.');
}


// задание 11
let str = '';

for (let i = 1; i <= 5; i++) 
{
    str += '* ';
    console.log(str);
}

// практическая №2

// задание 1
function greet() 
{
    alert('приветики ;)');
}
greet();

// задание 2
function greetUser() 
{
    let name = document.getElementById('username').value;
    alert('Привет, ' + name + '!');
}
  
// задание 3
function min()
{
    let min;
    let bts = parseFloat(prompt("Введите число a:"));
    let skz = parseFloat(prompt("Введите число b:"));
    if (bts<skz)
    {
        min=bts;
    }
    else
    {
        min=skz;
    }
    console.log(min + ' минимальное');
}
min();


// задание 4

function solveQuadraticEquation() 
{
    let ojbooda = prompt('Введите коэффициент a:');
    if (ojbooda === null) {
        alert('Вы отменили ввод коэффициента a.');
        return;
    }
  
    let lilkristall = prompt('Введите коэффициент b:');
    if (lilkristall === null) {
        alert('Вы отменили ввод коэффициента b.');
        return;
    }

    let mayot = prompt('Введите коэффициент c:');
    if (mayot === null) {
        alert('Вы отменили ввод коэффициента c.');
        return;
    }

    if (ojbooda.trim() === '' || lilkristall.trim() === '' || mayot.trim() === '') {
        alert('Пожалуйста, введите все коэффициенты.');
        return;
    }

    ojbooda = parseFloat(ojbooda);
    lilkristall = parseFloat(lilkristall);
    mayot = parseFloat(mayot);

    let discriminant = lilkristall ** 2 - 4 * ojbooda * mayot;
    if (discriminant > 0) 
    {
        let x1 = (-lilkristall + Math.sqrt(discriminant)) / (2 * ojbooda);
        let x2 = (-lilkristall - Math.sqrt(discriminant)) / (2 * ojbooda);
        console.log('ответ' + [x1, x2]);
    } 
    else if (discriminant === 0) 
    {
        let x = -lilkristall / (2 * ojbooda);
        console.log('ответ' + x);
    } 
    else 
    {
        console.log('Уравнение не имеет действительных корней'); 
    }
}
solveQuadraticEquation();

// практическая №3

// задание 1
let array1 = [1, 2, 3, 4, 2, 1, 4];
let array2 = new Array(4, 5, 6);
let array3 = Array.of(7, 8, 9);

// задание 2
console.log(array1[4]);
array1[4] = 10;
console.log(array1[4]);


// задание 3
let myarr=[1,3,4,7,9,1,4,8];
function len(){
    console.log(myarr.length);
}
document.addEventListener("mouseover", len); 

// задание 5
for (let i = 0; i < myarr.length; i++) {
    console.log(myarr[i]);
}

myarr.forEach(function(element) {
    console.log(element);
});


// задание 6
let array4 = [10, 11, 12];
let array5 = [13, 14, 15];
let combinedArray = array4.concat(array5);
console.log(combinedArray);

// задание 7
let deletedElement = myarr.pop();
console.log(deletedElement);

// задание 8
combinedArray.unshift(9);
console.log(combinedArray);

// задание 9
let inputArray = prompt("Введите значения массива через запятую:");
let val = inputArray.split(",").map(Number);

let squareRootArray = val.map(val=> Math.sqrt(val));

console.log("Массив значений с квадратными корнями:");
console.log(squareRootArray);

// задание 10
let currentDate = new Date();
console.log(currentDate);

// задание 12
const options = { year: 'numeric', month: 'long', day: 'numeric' };
console.log(currentDate.toLocaleDateString('ru-RU', options));

// задание 13
function multiplyRandomNumbers() {
    let num1 = Math.floor(Math.random() * 51);
    let num2 = Math.floor(Math.random() * 51);
    return num1 * num2;
}

console.log(multiplyRandomNumbers());

// практическая №4

let Student2=new Object(); 
Student2.vozr=19; 
 
 
 
let Student={ 
    age:24, 
    name:"Олег", 
    napravlenie:"ИФСТ", 
    sayAge(){ 
        alert(this.age); 
    }, 
    sayName(){ 
        alert(this.name); 
    } 
}; 
Student.sayAge(); 
Student.sayName(); 
 
function constrStubent(age,name,naprav,kurs){ 
    this.age=age; 
    this.name= name; 
    this.naprav=naprav; 
    this.kurs=kurs; 
    this.Agele=function() 
    { 
        return alert(age); 
    }, 
    this.Namele=function() 
    { 
        return alert(name); 
    }, 
    this.Kursle=function() 
    { 
        return alert(kurs); 
    }, 
    this.Napravle=function() 
    { 
        return alert(naprav); 
    } 
} 
 
 
let veronica= new constrStubent(19,'Вероника','Историк',1); 
veronica.Agele(); 
veronica.Namele(); 
veronica.Napravle(); 

// This в JavaScript — это ссылка на какой-то объект. 
// Объект, на который ссылается this, может меняться в зависимости от контекста вызова. Чаще всего this определяется тем, кто вызывает функцию. 
// Вот некоторые ситуации, в которых может использоваться this: 
// Простой вызов. В общем случае this указывает на глобальный объект. 
// Внутри объекта. Когда this используется внутри объекта, то ссылается на сам объект. 
// В режиме конструктора. Когда this используется в режиме конструктора, оно автоматически указывает на объект в текущем конструкторе, откуда его вызывают. 
// Работа с методами call() и apply(). This хранит контекст вызова, который не меняется во время передачи в другую функцию. 
// В стрелочных функциях. This часто используют в стрелочных функциях, чтобы не перегружать код дополнительными методами.

// 4) Определение ключевого слова this:
// - Ключевое слово this в JavaScript ссылается на текущий объект, в контексте которого оно вызывается.
// - this позволяет обращаться к свойствам и методам объекта без необходимости указывать его имя явно.
// - this целесообразно использовать в методах объекта для доступа к его собственным свойствам и методам.



  

// практическая №6

// Создаем объекты для фильмов
// let films = [
//     {
//         title: "Побег из Шоушенка",
//         genre: "Драма",
//         rating: 9.3
//     },
//     {
//         title: "Зеленая миля",
//         genre: "Драма",
//         rating: 8.6
//     },
//     {
//         title: "Начало",
//         genre: "Фантастика",
//         rating: 8.8
//     },
//     {
//         title: "Интерстеллар",
//         genre: "Фантастика",
//         rating: 8.6
//     },
//     {
//         title: "Матрица",
//         genre: "Фантастика",
//         rating: 8.7
//     }
// ];

// // Функция для опроса пользователя и рекомендации фильмов
// function recommendFilms() {
//     let userPreferences = {
//         genre: prompt("Какой жанр вам больше нравится? (Драма, Фантастика и т.д.)"),
//         rating: parseFloat(prompt("Какой минимальный рейтинг вам интересен?"))
//     };

//     let recommendedFilms = films.filter(film => {
//         return film.genre === userPreferences.genre && film.rating >= userPreferences.rating;
//     });

//     if (recommendedFilms.length > 0) {
//         console.log("Рекомендуемые фильмы:");
//         recommendedFilms.forEach(film => {
//             console.log(${film.title} (${film.genre}) - Рейтинг: ${film.rating});
//         });
//     } else {
//         console.log("К сожалению, по вашим предпочтениям фильмов не найдено.");
//     }
// }

// // Вызываем функцию для рекомендации фильмов
// recommendFilms();
