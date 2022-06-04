$( document ).ready(function() {

// query selector to select task description
var taskDescription = document.querySelector('.description');
// query selector for save button
var saveTask = document.querySelector('.saveBtn');

// function to save the tasks from textarea when the save button is clicked using example code from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_textarea_value
// function saveTaskEight() {
//     var x = document.getElementById("eight_task").ariaValueMax;
//     document.getElementById("eight_task").innterHTML = x;
// }


// when planner is opened then current day is displayed on the top of the page (used moment.js)
var rightNow = moment().format("MMMM Do, YYYY");
// this is the vanilla javaScript: 
// var currentDay = document.querySelector("#currentDay")
// currentDay.innerHTML = rightNow
$("#currentDay").html(rightNow)

// when time blocks are viewed
// each time block has color-code to indicate if it's in the past, present, or future
// empty array to store tasks 
var tasks = [];
console.log(tasks);

// upon save 'click' 
// then text for that event is saved in local storage
// attaching event listener to 'click' of save button in vanilla JS, this is saveTask.addEventListener("click", newTask);
$(".saveBtn").click(function() {
    // call the saveTasks function
    saveTasks();
});

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var text = "event"
localStorage.setItem("task", tasks)

localStorage.setItem("8am", "eight_task")
localStorage.setItem("9am", "nine_task")
localStorage.setItem("10am", "ten_task")
localStorage.setItem("11am", "eleven_task")
localStorage.setItem("12pm", "twelve-task")
localStorage.setItem("1pm", "one-task")
localStorage.setItem("2pm", "two_task")
localStorage.setItem("3pm", "three_task")
localStorage.setItem("4pm", "four_task")
localStorage.setItem("5pm", "five_task")

// when page is refresehd
// then the saved events persist 
var savedTasks = localStorage.getItem("task")
console.log(savedTasks)
var eightTasks = localStorage.getItem("8am")
//FIRST STEP - check to see if there's data
//eightTasks is the content for that 8am textarea, so need to assign the content to that html element on page load


});