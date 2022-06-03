$( document ).ready(function() {

// query selector to select task description
var taskDescription = document.querySelector('.description');
// query selector for save button
var saveTask = document.querySelector('.saveBtn');

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

localStorage.setItem("8am", "8am tasks")
localStorage.setItem("9am", "9am tasks")
localStorage.setItem("10am", "10am tasks")
localStorage.setItem("11am", "11am tasks")
localStorage.setItem("12pm", "12pm tasks")
localStorage.setItem("1pm", "1pm tasks")
localStorage.setItem("2pm", "2pm tasks")
localStorage.setItem("3pm", "3pm tasks")
localStorage.setItem("4pm", "4pm tasks")
localStorage.setItem("5pm", "5pm tasks")

// when page is refresehd
// then the saved events persist 
var savedTasks = localStorage.getItem("task")
console.log(savedTasks)
var eightTasks = localStorage.getItem("8am")
//FIRST STEP - check to see if there's data
//eightTasks is the content for that 8am textarea, so need to assign the content to that html element on page load


});