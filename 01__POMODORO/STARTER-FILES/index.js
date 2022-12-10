let startButton = document.querySelector(".start");
let minutes = document.querySelector("#minutesInput").value;
let seconds = document.querySelector("#secondsInput").value;
let circleRing = document.querySelector(".ring");

startButton.addEventListener("click", countdown);

function countdown() {
  startButton.innerHTML = "stop";
  countDownClock();
}

function countDownClock() {
  if (minutes == 0 && seconds == 0) {
    document.querySelector("#secondsInput").value = 00;
    document.querySelector("#minutesInput").value = 00;
    circleRing.classList.add("ending");
    return;
  }
  if (seconds <= 0) {
    minutes--;
    countDownMinutes();
    seconds = 60;
    document.querySelector("#secondsInput").value = seconds;
  }
  seconds--;
  setTimeout(countDownClock, 1000);
  document.querySelector("#secondsInput").value = seconds;
}

function countDownMinutes() {
  setTimeout(countDownMinutes, 60000);
  document.querySelector("#minutesInput").value = minutes;
}
