// script.js

function searchFiles() {
  const searchInput = document.getElementById('searchInput');
  const searchQuery = searchInput.value;

  fetch(`/.netlify/functions/searchFile?q=${encodeURIComponent(searchQuery)}`)
    .then((response) => response.json())
    .then((data) => {
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = '';

      if (data.error) {
        const errorItem = document.createElement('li');
        errorItem.textContent = data.error;
        searchResults.appendChild(errorItem);
      } else {
        data.forEach((file) => {
          const fileItem = document.createElement('li');
          fileItem.textContent = file.name;
          searchResults.appendChild(fileItem);
        });
      }
    })
    .catch((error) => console.error('Error searching files:', error));
}
