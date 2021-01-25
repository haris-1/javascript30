"use strict";

function getDate() {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();

  return { hours, mins, seconds };
}

function setDate(date) {
  const hourHand = document.querySelector(".hour-hand");
  const minsHand = document.querySelector(".min-hand");
  const secondsHand = document.querySelector(".second-hand");

  // so that rotation starts from 12
  const initialDegrees = 90;

  const getHourDegrees = () => {
    if (date.hours > 12) {
      return ((date.hours - 12) / 12) * 360 + initialDegrees;
    } else {
      return (date.hours / 12) * 360 + initialDegrees;
    }
  };

  const hourDegrees = getHourDegrees();
  const minDegrees = (date.mins / 60) * 360 + initialDegrees;
  const secondDegrees = (date.seconds / 60) * 360 + initialDegrees;

  console.log(hourDegrees, minDegrees, secondDegrees);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minsHand.style.transform = `rotate(${minDegrees}deg)`;
  secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(() => {
  const date = getDate();
  setDate(date);
}, 1000);
