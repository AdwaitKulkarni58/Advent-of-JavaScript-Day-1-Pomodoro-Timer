let startButton = document.querySelector(".start");

startButton.addEventListener("click", changeToStop);

function changeToStop() {
  startButton.innerHTML = "stop";
  startButton.removeEventListener("click", changeToStop);
  startButton.addEventListener("click", changeToStart);
}

function changeToStart() {
  startButton.innerHTML = "start";
  startButton.removeEventListener("click", changeToStart);
  startButton.addEventListener("click", changeToStop);
}
