import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const key = "44686774-01236c387d1eefb9bce1c8eeb";
const form = document.querySelector('.form');
const input = document.querySelector(".search-input");
const container = document.querySelector(".images-container");
const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox('.images-container a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

form.addEventListener("submit", searchImages);

function searchImages(event){
   event.preventDefault();
   const tagWord = getTagWord();
   if(tagWord){
    container.innerHTML = '';
    showLoader();
    fetchImages(key, tagWord)
    .then(images =>{
        hideLoader();
        if (images.length === 0){
            container.innerHTML = '';
            iziToast.error({
                title: 'No images',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position:'topRight',
            });
            return;
        }
        renderImages(images, container);
        lightbox.refresh();
    })
    .catch(error => {
        iziToast.error({
            title: 'Error!',
            message: 'Failed to fetch images',
            position: 'topRight',
        });
    });
   }
}

function getTagWord(){
    const tagWord = input.value;
    if(tagWord.trim() === ""){
        iziToast.error({
            title: 'Error',
            message: 'Please enter word',
        });
        return null;};

    return tagWord;
       
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}


