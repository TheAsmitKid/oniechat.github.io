var apiUrl = 'https://script.google.com/macros/s/AKfycbyXTHtGVF5dNr8cuFvkdHc940F9DbZ3xDNER03dFy3j7zZZWTfXzgQHNiUEpxvM3l0b/exec';

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
