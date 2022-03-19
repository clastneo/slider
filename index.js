const progressBar = document.querySelector(".progressBarForeground");
const presentImg = document.querySelector(".presentImg");
const playButton = document.querySelector(".playButton");
const pauseButton = document.querySelector(".pauseButton");
let img = [
  { src: "img/705-1920x1080.jpg" },
  { src: "img/817-1920x1080.jpg" },
  { src: "img/947-1920x1080.jpg" },
  { src: "img/1047-1920x1080.jpg" },
];

let timer = null;
let isPlay = false;

let sec = 10;

let progressValue = 0;
let pictureCounter = 0;

function addPercent() {
  progressValue += 1;
}

const callTimer = () => {
  if (progressValue === 100) {
    // clearTimer(timer)

    progressValue = 0;
    pictureCounter += 1;
    if (pictureCounter >= img.length) {
      pictureCounter = 0;
    }
    presentImg.src = img[pictureCounter].src;
    callTimer();
  } else {
    timer = setTimeout(() => {
      addPercent();
      let currentPercent = progressValue;

      progressBar.style.width = `${currentPercent}%`;
      callTimer();
    }, sec);
  }
};

const clearTimer = (timer) => {
  clearTimeout(timer);
};

function setPlay() {
  if (isPlay === false) {
    console.log(`pressed setPlay`);
    callTimer();
    isPlay = true;
  }
}
function setPause() {
  console.log(`pressed setPause`);
  clearTimer(timer);
  isPlay = false;
}

playButton.addEventListener("click", setPlay, false);
pauseButton.addEventListener("click", setPause, false);
presentImg.src = img[0].src;
window.onload = () => {
  setPlay();
};
