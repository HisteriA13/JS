const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const paragraph = document.querySelector(".name");
const info = {
  name: [
    "Brian Jones",
    "Jimi Hendrix",
    "Janis Joplin",
    "Jim Morrison",
    "Kurt Cobain",
    "Richey Edwards",
    "Amy Winehouse",
  ],
  date: [
    "28.2.1942. - 3.7.1969.",
    "27.11.1942. - 18.9.1970.",
    "19.1.1943. - 4.10.1970.",
    "8.12.1943. - 3.7.1971.",
    "20.2.1967. - 5.4.1994.",
    "22.12.1967. - disappeared 1.2.1995.",
    "14.9.1983. - 23.7.2011.",
  ],
};
let currentIndex = 0;
function updateName() {
  paragraph.textContent = `${info.name[currentIndex]}\n${info.date[currentIndex]}`;
}

updateName();

previous.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + info.name.length) % info.name.length;
  updateName();
  const items = document.querySelectorAll(".item");
  document.querySelector(".container").prepend(items[items.length - 1]);
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % info.name.length;
  updateName();
  const items = document.querySelectorAll(".item");
  document.querySelector(".container").appendChild(items[0]);
});
