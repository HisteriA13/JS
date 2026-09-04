const msgs = {
  Underweight:
    "Every nourishing meal and solid workout brings you one step closer to your full strength and energy.",
  Normal:
    "Great job! Keep fueling your body with balance, movement, and healthy habits.",
  Overweight:
    "Small, consistant shifts in your daily routine build the foundation for lasting strength.",
  Obesity:
    "Your wellness journey starts with a single choice today-focuse on progress, not perfection.",
};

const inputHeightEl = document.getElementById("height");
const inputWeightEl = document.getElementById("weight");

const btnEl = document.getElementById("btn");
const result = document.getElementById("result");

const weightCondition = document.querySelector(".weight-condition");
const message = document.querySelector(".message");

btnEl.addEventListener("click", () => {
  // variables must be within the function
  // calculation in the moment of mouse click
  // Equation: BMI = weight (kg) / [height (m)]²
  const height = Number(inputHeightEl.value / 100);
  const weight = Number(inputWeightEl.value);
  const bmi = weight / (height * height);
  result.value = bmi.toFixed(2);

  let key = "";

  if (bmi < 18.5) {
    key = "Underweight";
  } else if (bmi < 25) {
    key = "Normal";
  } else if (bmi < 30) {
    key = "Overweight";
  } else {
    key = "Obesity";
  }

  // message transition
  message.style.transition = "none";
  message.style.opacity = "0";

  setTimeout(() => {
    weightCondition.textContent = key;
    message.textContent = msgs[key];

    message.style.transition = "opacity 4s ease";
    message.style.opacity = "1";
  }, 50);
});
