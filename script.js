var apiUrl = 'https://script.google.com/macros/s/AKfycbxzopciUMKvEyqb7otq_d4MSc37UYC0pnKTVYSLKoEWfk31m7oMLUjVNMM1_0uKP0I/exec';

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
