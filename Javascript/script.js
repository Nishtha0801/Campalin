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
// let myString = "Hey, I am Nishtha!";
// console.log(myString);

// console.log(typeof(myString));

// let myNumber = 8;
// console.log(myNumber);

// console.log(typeof(myNumber));

// // boolean
// let valueOne = false;
// let valuetwo = true;

// console.log(typeof(valueOne));

// // undefined
// let myUndefinedValue;
// console.log(myUndefinedValue);

// //null
// let nullValue = null;
// console.log(nullValue);

// //object
// const person = {
//     firstName: "Nishtha",
//     lastName: "Goyal"
// };
// console.log(person.lastName);
// console.log(typeof(person));

// // Javascript operators

// let a = 7; // assignment operator

// // a = a+5;
// a+=5; //addition assignment
// console.log(a); // 12
// a-=2; //subtraction assignment
// console.log(a); // 10
// a*=2; //multiplication assignment
// console.log(a); // 20

// a/=2; //division assignment
// console.log(a); //10

// a%=3; //remainder assignment
// console.log(a);

// let b=2;
// b**=2; //exponentation assignment
// console.log(b);

// // == -> equal to
// // != -> not equal to
// // === -> strict equal 2

// let myNumberTwo = "2";
// console.log(myNumberTwo == 2); // true

// console.log(myNumberTwo === 2); //false

// // logical operators
// // && (AND operator) -> will return true only if both the statements are true;
// // || (OR operator) -> will return true, if one of them is true;
// // ! (logical NOT) -> will make the operand false if it is true;

// console.log(true && false); //false
// console.log(true && true); //true

// console.log(false || false); //false;
// console.log(true || false); //true;

// console.log(!true); //false
// console.log(!false); //true


// let number = 4;
// if(number % 2 == 0){
//     console.log("It is an even number");
// } else {
//     console.log("It is an odd number");
// }

// // 0 => number is zero, > 0 -> +ve, < 0 -> -ve

// let myNumber = -5;
// if(myNumber > 0){
//     console.log("Positive number");
// } else if(myNumber<0){
//     console.log("Negative number");
// } else {
//     console.log("The number is zero");
// }

// // take three numbers, print down the largest of three numbers.
// let a = 4;
// let b = 8;
// let c = 10;
// // c is the largest one
// if(a>=b && a>=c){
//     console.log("a is the largest number")
// } else if(b>=a && b>=c){
//     console.log("b is the largest number");
// } else {
//     console.log("c is the largest number");
// }

// // task: range [0,10] number: 7 -> tell whether number is in the range or not?
// let low = 0;
// let high = 10;

// let data = 17;

// if(data>=low && data<=high){
//     console.log("the number is in the range");
// } else {
//     console.log("The number is not in the range");
// }

// loops
// for loop
// for(let i=1; i<=500; i++){
//     console.log(i);
// }
// print the table for 2 and 5
// for(let i=1;i<=10;i++){
//     console.log("2"+ "*" + i + "=" + 2*i);
// }

// // while loop
// let k=1;
// while(k<=10){
//     console.log(k);
//     k++;
// }

// forEach loop
// do while loop => explore yourself

// functions
// function greet(firstName, lastName){
//     console.log("Hey"+ " " + firstName + " " + lastName + "! How are you doing?");
// }

// greet("Nishtha", "Goyal");

// task1 -> write a function for addition
// task2 -> Write a function to convert Celsius to fahrenheit
// task3 -> Write a function to find the area of a given rectangle
// task4 -> Write a function to check if the two numbers are equal.

// function expression -> just an another syntax of creating a function
// a function is a value here
// let greet = function(){
//     console.log('Hii, I am a function expression');
// }
// greet();

// // Convert the task-4 into a function expression
// let equal = function(a,b){
//     if( a === b){
//         console.log("the numbers are equal");
//     } else {
//         console.log("the numbers are not equal");
//     }
// }

// equal(9,9);

// arrow functions: allows you to create cleaner functions

// let multiply = function(x,y){
//     return x*y;
// }

// let multiply = (x,y) => {
//     console.log("i am an arrow function");
//     return x*y;
// };

// let ans = multiply(6,4);
// console.log(ans);

// convert task2 and task3 into arrow functions


// arrays
// an array is an object that can store multiple values at once

// creating an array using an array literal
let myArray = [2,4,5,6,7,8,9];
console.log(myArray[2]);

let arrayOfString = ["Hello", "I", "Am", "Nishtha"];
console.log(arrayOfString);

// array with mixed data types
let data = [9, "Hello", 11, "Hi", "Good", 90, true];
console.log(data);

// array  and object within an array
let myData = [
    [1,2,3,5],
    {
        "firstName": "Nishtha",
        "lastName": "goyal",
    },
];

console.log(myData[1].lastName);

myData.push("I am added rn"); // push the element ot the last
console.log(myData);

// add in the beginning of the array
myData.unshift("First");
console.log(myData);

// change the elements of the array
myData[1] = "Replaced element";
console.log(myData);

// remove the element from the last
 myData.pop();

 // remove from the beginning
 myData.shift(); // remove the first element

 // array length
 console.log(myData.length);

 // task is now to attempt some questions from arrays





