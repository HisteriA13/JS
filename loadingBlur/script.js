const bgEl = document.querySelector(".background");
const perEl = document.querySelector(".percentage");

const remap = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let load = 0;
let interval = setInterval(loadingBlur, 40); // smaller number = faster

function loadingBlur() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  perEl.textContent = `${load}%`;
  perEl.style.opacity = remap(load, 80, 100, 1, 0);
  bgEl.style.filter = `blur(${remap(load, 0, 100, 20, 0)}px)`;
}
