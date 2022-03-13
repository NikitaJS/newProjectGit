'use strict';



// callback это функция которая должна выполнена после того как другая функция решила выполнение 
// js функции могут принимать другие функции в качестве аргументов,
// а такжже возвращать их в качестве результата. 
// Обычно в js любая функция, которая передается как аргумент,
// называется коллбек функцией 

//first 
// el.addEventListener("click", () => { runAction })

function showMsg(name, status, callback) {
    if (callback && typeof callback === 'function') {
    callback();
} else {
    console.log(`Hello ${name}, you status is ${status}`);
}
}

showMsg("John", "Admin", () => {
    console.log('Hello message not supported.')
})


// two function callback 

    function learnJS (lang, callback) {
        console.log(`Я учу: ${lang}`);
        callback();
    }

    function done(){
        console.log('Я прошел этот урок');   
    }

    learnJS('JavaScript', done);

// anonum function
    // learnJS('JavaScript', function() {
    //     console.log('Я прошел этот урок');
    // }); 



    // Work object {} 
    // key name: 
    // the value of 'test'


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }

};


console.log(Object.keys(options).length);

// console.log(options.name); // test

// delete options.name;

// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);   
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }  
// }


const value = {
    name: 'Nikita',
    text: 'center',
    padding: 20,
    margin: {
        top: 15,
        bottom: 25
    },
    makeTest: function () {
        console.log("Test");
    }
};

value.makeTest();

console.log(Object.keys(value).length); // 4 



// Massive and psevdo-massive  []

// const arr = [1, 2, 3, 6, 8];  

// arr.forEach(function(item, i, arr)  {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// 0: 1 внутри массива 1,2,3,6,8
// 1: 2 внутри массива 1,2,3,6,8
// 2: 3 внутри массива 1,2,3,6,8
// 3: 6 внутри массива 1,2,3,6,8
// 4: 8 внутри массива 1,2,3,6,8




// arr.pop(); delet end 1, 2, 3, 6
// arr.push(10); add end [ 1, 2, 3, 6, 8, 10 ]


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// тоже саммое for let and let value of arr 

// for (let value of arr) {
//     console.log(value); 
// }


const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));

// метод сорт 
products.sort(); // aaa; bbb; ccc; как строки делает по алфавиту но не с цифрами 


// сортировка 

const arr = [1, 12, 33, 26, 8];  
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
} 



// MAIN OOP прототипно-орентировано-наследование 


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier); // нужна команда

// const jonh = {
//     health: 100
// };

// Object.setPrototypeOf(jonh, soldier); // нужна тоже 

jonh.sayHello();


