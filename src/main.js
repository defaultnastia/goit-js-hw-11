import { fetchImageByKeyword } from './js/pixabay-api';
import { generateToastError, createGalleryMarkup } from './js/render-functions';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//=== REFS
const searchFormEl = document.querySelector('.search-wrapper');
const searchInputEl = searchFormEl.querySelector('.searchbox-js');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new simpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

//=== LOGIC
searchFormEl.addEventListener('submit', searchSubmitHandler);

//=== FUNCTIONS
function searchSubmitHandler(event) {
  event.preventDefault();

  const keyWord = searchInputEl.value.trim();
  if (keyWord === '') {
    generateToastError('missing_keyword');
    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('visually-hidden');

  fetchImageByKeyword(keyWord)
    .then(images => createGalleryMarkup(images.hits))
    .then(galleryMarkup => {
      galleryEl.innerHTML = galleryMarkup;
      lightbox.refresh();
      loaderEl.classList.add('visually-hidden');
    })
    .catch(error => {
      generateToastError(error.message);
      loaderEl.classList.add('visually-hidden');
    });
}
