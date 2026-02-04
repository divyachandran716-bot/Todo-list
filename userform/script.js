const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const task = input.value;
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.innerText = task;


    const markBtn = document.createElement("button");
    markBtn.innerText = "Mark";
    markBtn.className = "btn btn-success btn-sm me-1";
    markBtn.addEventListener("click", function () {
        span.classList.toggle("text-decoration-line-through");
    });


    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "btn btn-warning btn-sm me-1";
    editBtn.addEventListener("click", function () {
        const newTask = prompt("Edit task", span.innerText);
        if (newTask !== null && newTask !== "") {
            span.innerText = newTask;
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });


    const btnGroup = document.createElement("div");
    btnGroup.appendChild(markBtn);
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    taskList.appendChild(li);

    input.value = "";
});
