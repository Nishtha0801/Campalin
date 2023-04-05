let addBtn = document.getElementById("add");
console.log(addBtn);

let inputDiv = document.querySelector("#input-task");
console.log(inputDiv.value);

let tasksDiv = document.querySelector(".tasks");
console.log(tasksDiv);

addBtn.addEventListener("click", () => {
    console.log("Add btn is clicked");
    let taskValue = inputDiv.value;
    console.log(taskValue);

    if (taskValue.length == 0) {
        alert("A task cannot be empty");
    }

    let newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task-div");
    newTaskDiv.innerHTML = `
        <span id = "taskName"> ${taskValue} </span>
        <button id="delete">
             Delete
        </button>
    `;
    tasksDiv.appendChild(newTaskDiv);

    let deleteBtns = document.querySelectorAll("#delete");

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    inputDiv.value = "";
});

//homework -> implement the edit feature and when the task is completed, just put a strikethrough




