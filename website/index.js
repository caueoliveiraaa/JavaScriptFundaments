// * Learning the basics:

// Printing content to the browser's console
console.log('* Basics:');
console.log('website is running');

//window.alert('Alert')
//window.alert('Alert 2')

// Setting data to HTML elements
document.getElementById('myH1').textContent = 'This is a header';
document.getElementById('myP').textContent = 'This is a paragraph';


// * Learning about variables:
console.log('\n* Variables:');

// Declaration then assignment
let x;
x = 100;

// Declaration with assignment
let y = 200;

console.log('x:', x);
console.log('y:', y);

let age = 25;
let price = 10.99;
let gpa = 2.1;
let fistName = "John";

console.log(`Your name is $${fistName}`);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is $${gpa}`);

// Print the type of a variable
console.log(`Type of gpa is ${typeof gpa}`);
console.log(`Type of age is ${typeof age}`);
console.log(`Type of price is ${typeof price}`);
console.log(`Type of fistName is ${typeof fistName}`);

