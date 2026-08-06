const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
}

updateClock();

setInterval(() => {
  updateClock();
}, 1000);
