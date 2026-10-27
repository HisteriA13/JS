const container = document.querySelector(".container");
const cards = document.querySelector(".cards");

// changing display for mobile (see media query)
const isMobile = () => window.innerWidth < 515;

// keep track of the mouse
let isPressedDown = false;

// x horizontal space of the cursor from inner container
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  if (isMobile()) return;
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  if (isMobile()) return;
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown || isMobile()) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  if (isMobile()) return;
  const containerRect = container.getBoundingClientRect();
  const cardsRect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cardsRect.right < containerRect.right) {
    cards.style.left = `-${cardsRect.width - containerRect.width}px`;
  }
}
