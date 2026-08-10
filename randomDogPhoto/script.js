const btnEl = document.getElementById("btn");
const imgEl = document.querySelector(".dog-img");
const dogContainerEl = document.querySelector(".dog-container");
const dogBreedEl = document.querySelector(".dog-breed");

btnEl.addEventListener("click", getPhoto);

async function getPhoto() {
  try {
    btnEl.disabled = true;
    btnEl.textContent = "Loading...";
    imgEl.src = "img/loading.svg";

    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(data);

    btnEl.disabled = false;
    btnEl.textContent = "Woof!";
    dogContainerEl.style.display = "block";
    imgEl.src = data.message;

    const urlParts = data.message.split("/");
    const breedName = urlParts[4].replace("-", " ");
    dogBreedEl.textContent =
      breedName.charAt(0).toUpperCase() + breedName.slice(1).toUpperCase();
  } catch (error) {
    btnEl.disabled = false;
    btnEl.textContent = "Woof!";
    dogBreedEl.textContent = "An error occured...";
  }
}
