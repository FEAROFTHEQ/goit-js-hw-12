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
const btnLoadMore= document.querySelector(".btn-load-more");
const lightbox = new SimpleLightbox('.images-container a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});
let page = 1;
let perPage = 15;
let images =[];
let tagWord;
let maxPages;
let heightOfImage;

form.addEventListener("submit", searchImages);
btnLoadMore.addEventListener("click", loadMore)

async function searchImages(event){
   event.preventDefault();
   tagWord = getTagWord();
   images = [];
   page = 1;
   btnLoadMore.style.display = 'none';
   if(tagWord){
    container.innerHTML = '';
    showLoader();
    try{
        const data = await fetchImages(key, tagWord, page, perPage);
        images = data.hits;
        maxPages = Math.ceil(data.totalHits / perPage);
        hideLoader();
        if (images.length === 0){
            container.innerHTML = '';
            iziToast.error({
                title: 'No images',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position:'center',
            });
            return;
    }
    container.innerHTML = '';
    renderImages(images, container);
    page+=1;
    lightbox.refresh();
    const imageLi = document.querySelector(".item");
    heightOfImage = imageLi.getBoundingClientRect().height;
    if (page > maxPages){
        return;
    }
    if (page > 1) {
        btnLoadMore.style.display = 'block';
      }
}
    catch(error) {
        hideLoader();
        console.log(error);
        iziToast.error({
            title: 'Error!',
            message: 'Failed to fetch images',
            position: 'center',
        });
    };
   }
}

async function loadMore(event){
    event.preventDefault();
    showLoader();
    try{
        const data = await fetchImages(key, tagWord, page, perPage);
        images = data.hits;
        hideLoader();
        if (page > maxPages) {
            hideLoader();
            iziToast.info({
              message: "We're sorry, but you've reached the end of search results.",
              position: 'center',
            });
            btnLoadMore.style.display = 'none';
            return;
          }
    page+=1;
    renderImages(images, container);
    smoothScroll(heightOfImage * 2);
    lightbox.refresh();
}
    catch(error) {
        hideLoader();
        iziToast.error({
            title: 'Error!',
            message: 'Failed to fetch images',
            position: 'center',
        });
    };
   }

function getTagWord(){
    const tagWord = input.value;
    if(tagWord.trim() === ""){
        iziToast.error({
            title: 'Error',
            message: 'Please enter word',
            position: 'center'
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

function smoothScroll(height) {
    window.scrollBy({
      top: height,
      behavior: 'smooth'
    });
  }


