// const person1 = {
//     name: "Nishtha",
//     species: "human",
//     greet: () => console.log("Hello, I am greet function!"),
//     fav: () => console.log("I love chocolates")
// }

// person1.fav();
// person1.greet();

// const person2 = {
//     name: "Nish",
//     species: "human",
//     greet: () => console.log("Hello, I am greet function!"),
//     fav: () => console.log("I love milk")
// }

// const person3 = {
//     name: "Nishth",
//     species: "human",
//     greet: () => console.log("Hello, I am greet function!"),
//     fav: () => console.log("I love silk")
// }

//classes

class person{
    constructor(name, fav){
        this.name = name;
        this.species = "human";
        this.fav = fav;
    }

    favFunction = () => console.log("I love" + " " + this.fav);
}



const person1 = new person("Nishtha", "chocolate");
person1.favFunction();
const person2 = new person("John", "milk");
// this actually points to the class itself, used to refer the current class object.

class Animal{
    constructor(name){
        this.name = name;
    }
    eat = () => console.log("I am the method of Animal class");
}

class Dog extends Animal{
    contructor(name){
        // super(name);
    }
    display = () => console.log("My name is" + " " + this.name);
}

const objectDog = new Dog("Sheru");
objectDog.display();
objectDog.eat();

//polymorphism
class myFirst{
    multiply = () => console.log("first method");
}

class mySecond extends myFirst{
    multiply = () => console.log(5*10);
}

class myThird extends mySecond{
    multiply = () => console.log("last method");
}

const classFirst = new myFirst();
classFirst.multiply();

const classSecond = new mySecond();
classSecond.multiply();

const classThird = new myThird();
classThird.multiply();

