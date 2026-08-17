const movieEl = document.getElementById("movie");
const videoEl = document.querySelector("video");
const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close");

btnEl.addEventListener("click", () => {
  movieEl.classList.remove("hide");
});

closeEl.addEventListener("click", () => {
  movieEl.classList.add("hide");
  videoEl.pause();
  videoEl.currentTime = 0;
});

window.addEventListener("click", (e) => {
  e.target === movie ? movie.classList.add("hide") : false;
  videoEl.pause();
  videoEl.currentTime = 0;
});
