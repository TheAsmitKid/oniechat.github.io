var apiUrl = 'https://script.google.com/macros/s/AKfycbzmRJ0KBSJbNAq8XU-PDxVwGlysuxTVr_kmY6BRnNgNhLLo9aZuhc-4f4zAVXMgAT9x/exec';

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
