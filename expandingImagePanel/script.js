const slideEls = document.querySelectorAll(".slide");

slideEls.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActive();
    slide.classList.add("active");
  });
});

function removeActive() {
  slideEls.forEach((slide) => {
    slide.classList.remove("active");
  });
}
