import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.failure('Oops! Something went wrong! Try reloading the page!')
            


const breedList = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loaderEl = document.querySelector(".loading");

loaderEl.classList.remove('is-hidden');
breedList.classList.remove('is-hidden');

fetchBreeds()
    .then(data => {
        createOptions(data);
        new SlimSelect({
            select: '.breed-select',
        });
        // breedList.classList.remove('is-hidden');
        // loaderEl.classList.add('is-hidden')
    })
    .catch((error) => console.log(error))
    .finally(loaderEl.classList.add("is-hidden"));

function createOptions(arrCats) { 
    breedList.innerHTML = arrCats
        .map(({ id, name }) => `<option value=${id}>${name}</option>`)
        .join("");
}

function createMarkup(selectedCat) {
    catInfo.innerHTML = `<article class="flex-container">
  <img src="${selectedCat.url}" alt="${selectedCat.breeds[0].name}" width="300">
  <div class="thumb">
    <h3>${selectedCat.breeds[0].name}</h3>
    <p>${selectedCat.breeds[0].description}</p>
    <p><b>Temperament: </b>${selectedCat.breeds[0].temperament}</p>
  </div></article>`;
}

function handlerSelect(elem) { 
    loaderEl.classList.remove("is-hidden");
    catInfo.innerHTML = "";
    fetchCatByBreed(elem.target.value)
        .then(data => {
            // createMarkup(...data.data);
            createMarkup(data[0]);
            catInfo.classList.remove("is-hidden");
        })
        .catch((error) => console.log(error))
        .finally(() => loaderEl.classList.add("is-hidden"));
}

