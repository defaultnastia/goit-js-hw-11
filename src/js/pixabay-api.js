//=== CONFIG
const usersKey = '43979459-cb9029671f39809d08984a919';

//=== EXPORT
export function fetchImageByKeyword(keyWord) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: usersKey,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: keyWord,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
