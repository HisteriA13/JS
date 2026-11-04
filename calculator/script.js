const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.target.style.transform = "scale(.96)";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
    }, 200);

    const value = btn.textContent;
    const action = btn.getAttribute("data-action");

    if (action === "clear") display.textContent = "";
    else if (action === "clear_one")
      display.textContent = display.textContent.slice(0, -1);
    else if (action === "calculate") {
      try {
        // display.textContent = eval(display.textContent);
        /* I read that eval() is not the safe option. Even this is a simple learning project, I've decided to change eval() to new Function */
        const result = new Function(`return ${display.textContent}`)();
        display.textContent = result;
      } catch (err) {
        display.textContent = "Error";
        display.style.color = "rgba(255, 69, 0)";

        setTimeout(() => {
          display.textContent = "";
          display.style.color = "";
        }, 1500);
      }
    } else display.textContent += value;
  }),
);
