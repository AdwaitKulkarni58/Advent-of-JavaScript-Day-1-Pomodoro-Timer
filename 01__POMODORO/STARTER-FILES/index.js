let startButton = document.querySelector(".start");
let minutes = document.querySelector("#minutesInput").value;
let seconds = document.querySelector("#secondsInput").value;

startButton.addEventListener("click", countdown);

function countdown() {
  startButton.innerHTML = "stop";
  countDownSeconds();
  if (seconds < 0 && minutes >= 0) {
  }
  //   if (seconds > 0 && minutes >= 0) {
  //     setTimeout(countdown, 1000);
  //   } else {
  //     setTimeout(breakCountdown, 1000);
  //   }
  //   startButton.innerHTML = "stop";
  //   startButton.removeEventListener("click", changeToStop);
  //   startButton.addEventListener("click", changeToStart);
}

function countDownSeconds() {
  if (seconds <= 0) {
    minutes--;
    countDownMinutes();
    seconds = 60;
    document.querySelector("#secondsInput").value = seconds;
  }
  seconds--;
  setTimeout(countDownSeconds, 1000);
  document.querySelector("#secondsInput").value = seconds;
}

function countDownMinutes() {
  setTimeout(countDownMinutes, 60000);
  document.querySelector("#minutesInput").value = minutes;
}

// function breakCountdown() {
//   if (seconds < 0 && minutes >= 0) {
//     minutes--;
//     seconds = 59;
//   }
//   seconds--;
//   if (seconds >= 0 && minutes >= 0) {
//     setTimeout(breakCountdown, 1000);
//   } else {
//     stopCountdown();
//   }
// }

// function stopCountdown() {
//   clearTimeout(setTimeout(countDown, 1000));
// }

// function changeToStart() {
//   startButton.innerHTML = "start";
//   startButton.removeEventListener("click", changeToStart);
//   startButton.addEventListener("click", changeToStop);
// }

// function countdownMinutes() {
//   minutes--;
//   document.querySelector("#minutesInput").value = minutes;
// }

// function countdownSeconds() {
//   seconds = 59;
//   seconds--;
//   document.querySelector("#secondsInput").value = seconds;
// }
