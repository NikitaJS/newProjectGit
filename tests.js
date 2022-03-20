// Динамическа типизация 

// to string 

// 1
console.log(typeof(5 + '')); // string 

// 2
console.log(typeof(null + '')); // string


// 3
const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';


// to Number 

// 1
console.log(typeof(+'5')); // number 

// 2
let aswer = +prompt("Hello", ""); // number 


// to Boolean 

// 0, '', null, undefined, NaN;


let switcher = null; // false 

if (switcher) {
    console.log('Working...');
}  

switcher = 1; // Num

if (switcher) {
    console.log('Working...');
} // true 









