// selections

const keys = Array.from(document.querySelector(".keys").children);
const sounds = Array.from(document.querySelectorAll("audio"));

// functions

function playSound(keyCode) {
  sounds.forEach((sound) => {
    if (sound.getAttribute(`data-key`) === keyCode) {
      sound.currentTime = 0;
      sound.play();
    }
  });
}

// Events

window.addEventListener("keydown", (e) => {
  const keyCode = e.key.toUpperCase().charCodeAt().toString();
  playSound(keyCode);
});
