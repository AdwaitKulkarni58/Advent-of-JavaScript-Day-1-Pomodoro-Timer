let startButton = document.querySelector(".start");
let minutes = document.querySelector("#minutesInput").value;
let seconds = document.querySelector("#secondsInput").value;
let circleRing = document.querySelector(".ring");

startButton.addEventListener("click", countdown);

function countdown() {
  startButton.innerHTML = "stop";
  countDownClock();

  //   startButton.innerHTML = "stop";
  //   startButton.removeEventListener("click", changeToStop);
  //   startButton.addEventListener("click", changeToStart);
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
