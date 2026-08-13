const bgEl = document.querySelector(".background");
const perEl = document.querySelector(".percentage");

const remap = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
