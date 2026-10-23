const mainEl = document.querySelector("main");
const imgSource = "https://picsum.photos/200/"; /* lorem ipsum random photo */

for (let i = 0; i < 30; i++) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");

  const randomHeight =
    Math.floor(Math.random() * (500 - 100 + 1)) +
    100; /* random height 100px - 500px */

  img.src = `${imgSource}${randomHeight}`;
  img.alt = `Random image${i + 1}`;

  figure.appendChild(img);
  mainEl.appendChild(figure);
}
