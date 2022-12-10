let startButton = document.querySelector(".start");
let minutes = document.querySelector("#minutesInput").value;
let seconds = document.querySelector("#secondsInput").value;

startButton.addEventListener("click", changeToStop);

function changeToStop() {
  setInterval(countdownMinutes, 60000);
  startButton.innerHTML = "stop";
  startButton.removeEventListener("click", changeToStop);
  startButton.addEventListener("click", changeToStart);
}

function changeToStart() {
  startButton.innerHTML = "start";
  startButton.removeEventListener("click", changeToStart);
  startButton.addEventListener("click", changeToStop);
}

function countdownMinutes() {
  minutes--;
  document.querySelector("#minutesInput").value = minutes;
}
