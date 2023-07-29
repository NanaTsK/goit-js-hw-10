import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.failure('Oops! Something went wrong! Try reloading the page!')
            
// new SlimSelect({
//   select: '#selectElement'
// })

const breedList = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loaderEl = document.querySelector(".loading");

breedList.addEventListener("change", handlerSelect);

//*========



//*========

function handlerSelect(elem) { 
    loaderEl.classList.remove("is-hidden");
    catInfo.innerHTML = "";
    fetchCatByBreed(elem.target.value)
        .then(data => {
            createCard(...data.data);
            catInfo.classList.remove("is-hidden");
        })
        .catch(error => error)
    .finally(loading.remove("is-hidden"))
}

function createMarkup(selectedCat) {
    catInfo.innerHTML = `<article class="flex-container">
  <img src=${selectedCat.url} alt=${selectedCat.breeds[0].name} width="300">
  <div class="thumb">
    <h3>${selectedCat.breeds[0].name}</h3>
    <p>${selectedCat.breeds[0].description}</p>
    <p><b>Temperament: </b>${selectedCat.breeds[0].temperament}</p>
  </div></article>`
}





