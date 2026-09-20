// list=search - perform a full text search
// srsearch="inputValue" - search for page titles or content matching  this value.
// srlimit=20 How many total pages to return.
// format=json json response
// "origin=*" fix cors errors
const URL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue";

// const page_url = "href=http://en.wikipedia.org/?curid=${pageid}";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const errorParagraf = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (!inputValue) {
    errorParagraf.style.display = "block";
  }
  fetchWiki(value);
});

function fetchWiki(searchValue) {}
