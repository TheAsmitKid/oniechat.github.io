var apiUrl = 'https://script.google.com/macros/s/AKfycbyfW0HQ-Hz1y6gud3VZsZ424CdBTtaymH9wjSr7IpLzSM0PxaHOVCVR3lKhRXlwF1ER/exec';

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
