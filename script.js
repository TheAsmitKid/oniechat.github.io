var apiUrl = 'https://script.google.com/macros/s/AKfycbzFa7NuK_SXD_M9kG5yOl31_4qjdeAsSyhR-LQEhNbkbqHoU7uhTG_GpHBSjh-YLSGF/exec';

fetch(apiUrl, {
  mode: 'cors'
})
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
