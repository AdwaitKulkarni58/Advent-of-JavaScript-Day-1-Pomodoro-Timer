// Declaring variables
let timer;
let startButton;
let circleRing;
let userMinutes;
let userSeconds;

// Enter the minutes and seconds you want, default is 15 minutes
function getUserInput() {
  timer = document.querySelector(".timer");
  startButton = document.querySelector(".start");
  circleRing = document.querySelector(".ring");

  userMinutes = sessionStorage.getItem("userMinutes");
  userMinutes = prompt("Enter minutes.");
  sessionStorage.setItem("userMinutes", userMinutes);
  userSeconds = sessionStorage.getItem("userSeconds");
  userSeconds = prompt("Enter seconds.");
  sessionStorage.setItem("userSeconds", userSeconds);

  document.querySelector("#minutesInput").value = userMinutes;
  document.querySelector("#secondsInput").value = userSeconds;
  startButton.addEventListener("click", countdown);
}

// Since its pomodoro, you cannot stop the timer once started
function countdown() {
  timer.removeChild(startButton);
  countDownClock();
}

// The actual countdown function
function countDownClock() {
  if (userMinutes == 0 && userSeconds == 0) {
    document.querySelector("#secondsInput").value = 00;
    document.querySelector("#minutesInput").value = 00;
    circleRing.classList.add("ending");
    alert("Time over.");
    return;
  }
  if (userSeconds <= 0) {
    userMinutes--;
    countDownMinutes();
    userSeconds = 60;
    document.querySelector("#secondsInput").value = userSeconds;
  }
  userSeconds--;
  setTimeout(countDownClock, 1000);
  document.querySelector("#secondsInput").value = userSeconds;
}

// Function to decrement the minutes
function countDownMinutes() {
  setTimeout(countDownMinutes, 60000);
  document.querySelector("#minutesInput").value = userMinutes;
}
