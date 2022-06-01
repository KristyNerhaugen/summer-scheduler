$( document ).ready(function() {


var rightNow = moment().format("MMMM Do, YYYY");
// var currentDay = document.querySelector("#currentDay")
// currentDay.innerHTML = rightNow

$("#currentDay").html(rightNow)
// when planner is onpened then current day is displayed (used moment.js)
console.log(rightNow);

//get date to display on the top of the page

// upon scrolling time blocks for standard business hours appear

// when time blocks are viewed
// each time block has color-code to indicate if it's in the past, present, or future

// upon 'click' for time block
// then an event can be entered

// upon save 'click' 
// then text for that event is saved in local storage
var text = "event"
localStorage.setItem("task", tasks)

localStorage.setItem("8am", "8am tasks")
localStorage.setItem("9am", "9am tasks")


// when page is refresehd
// then the saved events persist 
var savedTasks = localStorage.getItem("task")
console.log(savedTasks)
var eightTasks = localStorage.getItem("8am")
//FIRST STEP - check to see if there's data
//eightTasks is the content for that 8am textarea, so you need to assign the content to that html element on page load


});