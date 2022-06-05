
$(document).ready(function () {

    // query selector to select all task descriptions
    var taskDescription = document.querySelectorAll; ('.description');

    // query selector for save button
    var saveTask = document.querySelector('.saveBtn');


    // when planner is opened then current day is displayed on the top of the page (used moment.js)
    var rightNow = moment().format("MMMM Do, YYYY");
    // this is the vanilla javaScript: 
    // var currentDay = document.querySelector("#currentDay")
    // currentDay.innerHTML = rightNow
    $("#currentDay").html(rightNow)

    // when time blocks are viewed
    // use for loop to show that each time block has color-code to indicate if it's in the past, present, or future
    var colorCode = function() {
        for (let i = 8; i <= 16; i++) {
            if (i < rightNow) {
                // then add in class of "past"
                $("#" + i).addClass("past");
            } else if (i === rightNow) {
                $("#" + i).addClass("present");
            } else if (i > rightNow) {
                $("# + i").addClass("future");
            }
        };
    };

    // empty array to store tasks 
    var tasks = [];
    console.log(tasks);

    // upon save 'click' 
    // then text for that event is saved in local storage
    // this is not a DRY way to code this by having each save button with a separate ID, but I'm still struggling with learning js basics
    // I can go back and refactor the code to ensure DRY later
    // attaching event listener to 'click' of save button in vanilla JS, this is saveTask.addEventListener("click", newTask);
    
    // upon clicking saveBtnOne, save to localStorage
    $("#saveBtnOne").click(function () {
        // call the saveTasks function
        saveTaskOne();
        saveTasks();
    });

    var saveTaskOne = function() {
        console.log("before saving taskOne ", tasks);
        var taskOne = $("#eight_task");
        var taskOneId = "#eight_task";
        var taskOneText = taskOne.val();
        var taskOneObj = {
            id: taskOneId,
            text: taskOneText
        }
        tasks[0] = taskOneObj
        console.log("after saving taskOne ", tasks);

        saveTasks();
    };

    // upon clicking saveBtnTwo, save to localStorage
    $("#saveBtnTwo").click(function () {
        // call the saveTasks function
        saveTaskTwo();
        saveTasks();
    });

    var saveTaskTwo = function() {
        console.log("before saving taskTwo ", tasks);
        var taskTwo = $("#nine_task");
        var taskTwoId = "#nine_task";
        var taskTwoText = taskTwo.val();
        var taskTwoObj = {
            id: taskTwoId,
            text: taskTwoText
        }
        tasks[0] = taskTwoObj
        console.log("after saving taskTwo ", tasks);

        saveTasks();
    };

    // upon clicking saveBtnThree, save to localStorage
    $("#saveBtnThree").click(function () {
        // call the saveTasks function
        saveTaskThree();
        saveTasks();
    });

    var saveTaskThree = function() {
        console.log("before saving taskThree ", tasks);
        var taskThree = $("#ten_task");
        var taskThreeId = "#ten_task";
        var taskThreeText = taskThree.val();
        var taskThreeObj = {
            id: taskThreeId,
            text: taskThreeText
        }
        tasks[0] = taskThreeObj
        console.log("after saving taskThree ", tasks);

        saveTasks();
    };
    // upon clicking saveBtnFour, save to localStorage
    $("#saveBtnFour").click(function () {
        // call the saveTasks function
        saveTaskFour();
        saveTasks();
    });

    var saveTaskFour = function() {
        console.log("before saving taskFour ", tasks);
        var taskFour = $("#eleven_task");
        var taskFourId = "#eleven_task";
        var taskFourText = taskFour.val();
        var taskFourObj = {
            id: taskFourId,
            text: taskFourText
        }
        tasks[0] = taskFourObj
        console.log("after saving taskFour ", tasks);

        saveTasks();
    };

    // upon clicking saveBtnFive, save to localStorage
    $("#saveBtnFive").click(function () {
        // call the saveTasks function
        saveTaskFive();
        saveTasks();
    });

    var saveTaskFive = function() {
        console.log("before saving taskFive ", tasks);
        var taskFive = $("#twelve_task");
        var taskFiveId = "#twelve_task";
        var taskFiveText = taskFive.val();
        var taskFiveObj = {
            id: taskFiveId,
            text: taskFiveText
        }
        tasks[0] = taskFiveObj
        console.log("after saving taskFive ", tasks);

        saveTasks();
    };

    // upon clicking saveBtnSix, save to localStorage
    $("#saveBtnSix").click(function () {
        // call the saveTasks function
        saveTaskSix();
        saveTasks();
    });

    var saveTaskSix = function() {
        console.log("before saving taskSix ", tasks);
        var taskSix = $("#one_task");
        var taskSixId = "#one_task";
        var taskSixText = taskSix.val();
        var taskSixObj = {
            id: taskSixId,
            text: taskSixText
        }
        tasks[0] = taskSixObj
        console.log("after saving taskSix ", tasks);

        saveTasks();
    };

    // upon clicking saveBtnSeven, save to localStorage
    $("#saveBtnSeven").click(function () {
        // call the saveTasks function
        saveTaskSeven();
        saveTasks();
    });

    var saveTaskSeven = function() {
        console.log("before saving taskSeven ", tasks);
        var taskSeven = $("#two_task");
        var taskSevenId = "#two_task";
        var taskSevenText = taskSeven.val();
        var taskSevenObj = {
            id: taskSevenId,
            text: taskSevenText
        }
        tasks[0] = taskSevenObj
        console.log("after saving taskSeven ", tasks);

        saveTasks();
    };

    // upon clicking saveBtnEight, save to localStorage
    $("#saveBtnEight").click(function () {
        // call the saveTasks function
        saveTaskEight();
        saveTasks();
    });

    var saveTaskEight = function() {
        console.log("before saving taskEight ", tasks);
        var taskEight = $("#three_task");
        var taskEightId = "#three_task";
        var taskEightText = taskEight.val();
        var taskEightObj = {
            id: taskEightId,
            text: taskEightText
        }
        tasks[0] = taskEightObj
        console.log("after saving taskEight ", tasks);

        saveTasks();
    };

    // upon clicking saveBtnNine, save to localStorage
    $("#saveBtnNine").click(function () {
        // call the saveTasks function
        saveTaskNine();
        saveTasks();
    });

    var saveTaskNine = function() {
        console.log("before saving taskNine ", tasks);
        var taskNine = $("#four_task");
        var taskNineId = "#four_task";
        var taskNineText = taskNine.val();
        var taskNineObj = {
            id: taskNineId,
            text: taskNineText
        }
        tasks[0] = taskNineObj
        console.log("after saving taskNine ", tasks);

        saveTasks();
    };

    var saveTasks = function () {
        console.log("in save tasks ", tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // var text = "event"
    // localStorage.setItem("task", tasks)

    // localStorage.setItem("8am", "eight_task")
    // localStorage.setItem("9am", "nine_task")
    // localStorage.setItem("10am", "ten_task")
    // localStorage.setItem("11am", "eleven_task")
    // localStorage.setItem("12pm", "twelve-task")
    // localStorage.setItem("1pm", "one-task")
    // localStorage.setItem("2pm", "two_task")
    // localStorage.setItem("3pm", "three_task")
    // localStorage.setItem("4pm", "four_task")
    // localStorage.setItem("5pm", "five_task")

    // when page is refresehd
    // then the saved events persist 
    // var savedTasks = localStorage.getItem("task")
    // var eightTasks = localStorage.getItem("8am")
    //FIRST STEP - check to see if there's data
    //eightTasks is the content for that 8am textarea, so need to assign the content to that html element on page load

    // call colorCode function 
    colorCode();
});

