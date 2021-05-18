var formEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// its very important to place this function above the
// event listener because we would recive a error that
// createTaskHandler hasnt been defined because were calling
// a function not defined yet
var createTaskHandler = function (event) {
  event.preventDefault();

  // create new task item
  var listItemEl = document.createElement("li");
  // add item to stylesheet
  listItemEl.className = "task-item";
  // add text to the task item
  listItemEl.textContent = "This is a new task.";
  // add the element as a attachment to the task
  tasksToDoEl.appendChild(listItemEl);
  console.log(event);
};

// this defines the the function
formEl.addEventListener("click", createTaskHandler);
