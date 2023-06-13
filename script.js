var apiUrl = 'https://script.google.com/macros/s/AKfycbzNpNsuI-d_9EXhB5fyQEXnWpX_4sPvW6iBzakxmO95tBjmauhGrfvidQBES4ETC3Ab/exec';

fetch(apiUrl)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(function(data) {
    console.log(data); // Process the returned data here
  })
  .catch(function(error) {
    console.log('API Error:', error);
  });


const searchbar = document.querySelector(".search");
const submitBtn = document.querySelector(".search-btn");
const photoWrapper = document.querySelector(".photo-wrapper");

submitBtn.addEventListener("click", () => {
  getPhoto(searchbar.value);
  searchbar.value = "";
  photoWrapper.innerHTML = "";
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getPhoto(searchbar.value);
    searchbar.value = "";
    photoWrapper.innerHTML = "";
  }
});

async function getPhoto(keyword) {
  try {
    const response = await fetch(`/.netlify/functions/getPhotos?keyword=${encodedURIComponent(keyword)}`);
    const data = await response.json();
    console.log(data);
    photoWrapper.innerHTML = data;
  } catch (error) {
    alert(error);
    photoWrapper.innerHTML = data;
  }
}
