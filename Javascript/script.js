// var text = "hello world";
// console.log(text);

// var myNumber = 5;
// console.log(myNumber);
// // the same variable got redeclared, and with some different value
// var myNumber = 10;
// console.log(myNumber);

// text = "re-assigned the value!";
// console.log(text);

// //var variables can be redeclared and can be reupdated.

// // var is function scoped
// function greet(){
//     var hello = "Hello world";
//     console.log(hello);
// }
// greet();

//console.log(hello);

//let ==================================================
// let greet = "Good evening!";

// let counter = 4;
// // let is block scoped
// if(counter > 3){
//     let hello = "sayy hello!";
//     console.log(hello);
// }

// console.log(hello);
// let myNumber = 5;
// // let cannot be redeclared
// // let myNumber = 10;

// myNumber = 10; // let can be updated

// const is also block scoped(same as let)
// we cannot redeclare const variables
// const myNumber = 5;
// console.log(myNumber);

// myNumber = 10; // will give you an error
// console.log(myNumber);

// // const cannot be updated or re-declared.


// Different data types present in javascript
let myString = "Hey, I am Nishtha!";
console.log(myString);

console.log(typeof(myString));

let myNumber = 8;
console.log(myNumber);

console.log(typeof(myNumber));

// boolean
let valueOne = false;
let valuetwo = true;

console.log(typeof(valueOne));

// undefined
let myUndefinedValue;
console.log(myUndefinedValue);

//null
let nullValue = null;
console.log(nullValue);

//object
const person = {
    firstName: "Nishtha",
    lastName: "Goyal"
};
console.log(person.lastName);
console.log(typeof(person));

// Javascript operators

let a = 7; // assignment operator

// a = a+5;
a+=5; //addition assignment
console.log(a); // 12
a-=2; //subtraction assignment
console.log(a); // 10
a*=2; //multiplication assignment
console.log(a); // 20

a/=2; //division assignment
console.log(a); //10

a%=3; //remainder assignment
console.log(a);

let b=2;
b**=2; //exponentation assignment
console.log(b);

// == -> equal to
// != -> not equal to
// === -> strict equal 2

let myNumberTwo = "2";
console.log(myNumberTwo == 2); // true

console.log(myNumberTwo === 2); //false

// logical operators
// && (AND operator) -> will return true only if both the statements are true;
// || (OR operator) -> will return true, if one of them is true;
// ! (logical NOT) -> will make the operand false if it is true;

console.log(true && false); //false
console.log(true && true); //true

console.log(false || false); //false;
console.log(true || false); //true;

console.log(!true); //false
console.log(!false); //true

