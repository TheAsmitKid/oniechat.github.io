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
    const response = await fetch(`/.netlify/functions/searchFile?keyword=${encodedURIComponent(keyword)}`);
    const data = await response.json();
    console.log(data);
    photoWrapper.innerHTML = data;
  } catch (error) {
    alert(error);
    photoWrapper.innerHTML = data;
  }
}
