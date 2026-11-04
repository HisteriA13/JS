const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.target.style.transform = "scale(.96)";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
    }, 200);
  }),
);
