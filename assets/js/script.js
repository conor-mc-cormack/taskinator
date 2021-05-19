var formEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// its very important to place this function above the
// event listener because we would recive a error that
// createTaskHandler hasnt been defined because were calling
// a function not defined yet
var createTaskHandler = function (event) {
  event.preventDefault();
  // .value is what we use to record what was typed and
  // used console.dir(); to find it on the console
  // input name was pulled from html element
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // create list item
  var listItemEl = document.createElement("li");
  // gives it a class name
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";
  // adds new item to the bottom of the list
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl);
};

// this defines the the function
formEl.addEventListener("click", createTaskHandler);
