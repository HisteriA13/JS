const conditions = {
  underweight:
    "Every nourishing meal and solid workout brings you one step closer to your full strength and energy.",
  normal:
    "Great job! Keep fueling your body with balance, movement, and healthy habits.",
  overweight:
    "Small, consistant shifts in your daily routine build the foundation for lasting strength.",
  obesity:
    "Your wellness journey starts with a single choice today-focuse on progress, not perfection.",
};

const weightCondition = document.querySelector(".weight-condition");
weightCondition.textContent = "Underweight";

const msg = document.querySelector(".message");
msg.textContent = conditions.underweight;
