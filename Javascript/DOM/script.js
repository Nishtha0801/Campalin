//document.querySelector

let container = document.querySelector(".container");
console.log(container);

// let button = document.querySelector("#clickMe");
let button = document.getElementById("clickMe");
console.log(button);

//getElementsbyClassName
//querySelectorAll

button.addEventListener("click", () => {
    console.log("I have clicked the button");
    container.style.backgroundColor = "white";
    button.style.backgroundColor = "black";
    button.style.color = "white";
});

// square -> upon clicking -> it should change to circle.

let square = document.getElementsByClassName("square");
console.log(square);

let text = document.getElementById("text");
square[0].addEventListener("click", ()=>{
    console.log("I am square, I have been clicked");
    square[0].style.borderRadius = "50%";
    text.style.fontSize = "20px"

});

let newElementsDiv = document.querySelector(".newElements");

let createButton = document.getElementById("create");
console.log(createButton);

createButton.addEventListener("click", ()=>{
    console.log("Create button is clicked");
    let newElement = document.createElement("div");
    newElement.classList.add("newEle");
    newElement.innerHTML = `I am a new div`;


    newElementsDiv.appendChild(newElement);

});
