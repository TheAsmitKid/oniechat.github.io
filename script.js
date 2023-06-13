var apiUrl = 'https://script.google.com/macros/s/AKfycbzrNeyizPKCmz99GRJ6HIrKaK1gVUkLJdbulLCdn-tY8IafjTnSfoVQk97VcdGhSks/exec;

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
