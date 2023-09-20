// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object


// Symbol:
// Symbol is a built-in object whose constructor returns a
// symbol primitive — also called a Symbol value or just a
// Symbol — that's guaranteed to be unique. Symbols are often
// used to add unique property keys to an object that won't
// collide with keys any other code might add to the object,
// and which are hidden from any mechanisms other code will
// typically use to access the object. That enables a form
// of weak encapsulation, or a weak form of information hiding.

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date


// Numbers:
let length = 16
let weight = 7.5

// Strings:
let color = "Yellow"
let lastName = "Johnson"

// Booleans
let x = true
let y = false

// JS Object:
const person = {
    firstName: "John",
    lastName: "Doe"
}

// Array object:
const cars = [
    "Saab",
    "Volvo",
    "BMW"
]

// Date object:
const date = new Date("2022-03-25")

// Showing objects
console.log(`Array Object ${cars}`)
console.log(`Date Object ${date}`)
console.log(`JavaScript Object ${person}`)


// JavaScript BigInt
// All JavaScript numbers are stored in a a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
// Example:

let bigInt = BigInt("123456789012345678901234567890")
console.log(`Number BigInt ${bigInt}`)


// #NOTES:
// When adding a number and a string, JavaScript will treat the number as a string.
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

// All JavaScript numbers are stored as decimal numbers (floating point).
// Numbers can be written with, or without decimals:
// With decimals:
// let x1 = 34.00;
// Without decimals:
// let x2 = 34;

// Extra large or extra small numbers can be written with scientific (exponential) notation:
// let y = 123e5;    // 12300000
// let z = 123e-5;   // 0.00123