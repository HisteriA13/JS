// list=search - perform a full text search
// srsearch="inputValue" - search for page titles or content matching  this value.
// srlimit=20 How many total pages to return.
// format=json json response
// "origin=*" fix cors errors
const URL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=50&format=json&origin=*&srsearch=";

// const pageURL = "href=http://en.wikipedia.org/?curid=${pageid}";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const results = document.querySelector(".result");

const loading = document.querySelector(".loading");
const errorEmpty = document.querySelector(".errorEmpty");
const errorNetwork = document.querySelector(".errorNetwork");
const errorResults = document.querySelector(".errorResults");

function hide() {
  errorEmpty.classList.add("hidden");
  loading.classList.add("hidden");
  errorNetwork.classList.add("hidden");
  errorResults.classList.add("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hide();
  const inputValue = input.value;
  if (!inputValue) {
    errorEmpty.classList.remove("hidden");
    return;
  }
  fetchWiki(inputValue);
});

async function fetchWiki(searchValue) {
  loading.classList.remove("hidden");
  try {
    const response = await fetch(`${URL}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;

    if (results.length < 1) {
      errorResults.classList.remove("hidden");
      return;
    }
    showResults(results);
  } catch (error) {
    errorNetwork.classList.remove("hidden");
  }
}

function showResults(list) {
  loading.classList.add("hidden");
  const cardList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
    <h2>${title}</h2>
    <p>${snippet}</p>
    </a>`;
    })
    .join("");
  results.innerHTML = `<div class="results">${cardList}</div>`;
}
