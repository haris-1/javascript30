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

function addTransition(keyCode) {
  keys.forEach((key) => {
    if (key.getAttribute("data-key") === keyCode) {
      key.classList.add("playing");
    }
  });
}

function removeTransition(keyElement) {
  keyElement.classList.remove("playing");
}

// Events

// add event for keyboard
window.addEventListener("keydown", (e) => {
  const keyCode = e.key.toUpperCase().charCodeAt().toString();
  playSound(keyCode);
  addTransition(keyCode);
});

// add event for mouse and mobile users
keys.forEach((key) =>
  key.addEventListener("click", (e) => {
    const keyCode = e.currentTarget.getAttribute("data-key");
    playSound(keyCode);
    addTransition(keyCode);
  })
);

keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    removeTransition(e.currentTarget);
  })
);
