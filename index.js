window.addEventListener("keydown", onKeyPress);

let drumKeys = document.querySelectorAll(".drum-key");

function onKeyPress(e) {
  let music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.drum-key[data-key="${e.keyCode}"]`);

  music.currentTime = 0;
  music.play();
  key.classList.add("active");
  key.addEventListener("transitionend", () => {
    key.classList.remove("active");
  });
}
