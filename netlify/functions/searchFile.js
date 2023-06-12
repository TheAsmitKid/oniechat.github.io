// netlify/functions/searchFile.js

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async (event, context) => {
  try {
    const searchQuery = event.queryStringParameters.q; // Query parameter for the search query

    // Make a request to the Google Drive API
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=name%20contains%20%27${encodeURIComponent(
        searchQuery
      )}%27&fields=files(id,name)&pageSize=10&orderBy=relevance`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GOOGLE_DRIVE_ACCESS_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    const files = data.files;

    // Return the search results as JSON
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(files),
    };
  } catch (error) {
    console.error('Error searching for file:', error);

    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while searching for the file.' }),
    };
  }
};
