'use strict';

// Передача по ссылке или по значению, Spread оператор es6-es9

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылку 
// copy.a = 10;

// console.log(copy);
// console.log(obj);


// Работа с поверхостными копиями 
// (есть еще глубокие когда внутри {} ili [])


function copy (mainObj) {
    let objcopy = {};

    let key;

    for ( key in mainObj) {
        objcopy[key] = mainObj [key];
    }
    return objcopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

//{ a: 10, b: 5, c: { x: 7, y: 4 } } copy 
// { a: 2, b: 5, c: { x: 7, y: 4 } } origin 


const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add)); // Первым аргументом что поместим, и 2 Обьект тот кого помещяем не зависимая копия обьекта 

clone.d = 40;

// console.log(clone);
// console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'hhkkkhhhjkkjh'

console.log(newArray);
console.log(oldArray);

//
const video = ['youtube', 'pornohub', 'rutube'],
      blogs = ['instagram', 'tiktok', 'blogger'],
      internet = [...video, ...blogs, 'facebook', 'Twitter'];


console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
//
const num = [2, 5, 7];

log(...num);

// 
const array = ["a", "b"];

const newAarra = [...array];

console.log(newAarra);

//
// spread operator ...
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);
//