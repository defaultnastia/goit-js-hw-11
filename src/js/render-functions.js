import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//=== EXPORT
export function createGalleryMarkup(imagesArray) {
  if (imagesArray.length === 0) {
    generateToastError('no_images_found');
    return '<div class="nothing-fetched"></div>';
  }
  let imageMarkupString = '';
  imagesArray.forEach(image => {
    imageMarkupString += `<li><a href="${
      image.largeImageURL
    }"><img src="${image.webformatURL.replace('_640', '_340')}" alt="${
      image.tags
    }"/></a>${createImageStatsMarkup(image)}
</li>`;
  });
  return imageMarkupString;
}

export function generateToastError(error) {
  // expected errors
  if (error.toString() === '400') error = 'Check the request parameters.'; //to test comment the "key" URL parameter
  if (error.toString() === '404') error = 'Check the endpoint.'; // to test change const END_POINT = '/api/dapi';
  if (error.toString() === '500') error = 'Try again later.';
  if (error.toString() === 'missing_keyword') error = 'Enter the keyword.';
  if (error.toString() === 'no_images_found')
    error =
      'Sorry, there are no images matching your search query. Please try again!';
  iziToast.show({
    title: 'Oops!',
    message: `${error}`,
    color: 'red',
  });
}

//=== FUNCTIONS
function createImageStatsMarkup(image) {
  return `<div class="stats-box"><p>Likes<br><span>${image.likes}</span></p><p>Views<br><span>${image.views}</span></p><p>Comments<br><span>${image.comments}</span></p><p>Downloads<br><span>${image.downloads}</span></p></div>`;
}
