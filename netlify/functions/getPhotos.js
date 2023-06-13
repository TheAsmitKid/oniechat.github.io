const { google } = require("googleapis");

exports.handler = async (event, context) => {
  try {
    const keyword = event.queryStringParameters;

    const privateKey = process.env.CLIENT_PRIVATE_KEY;
    const clientEmail = process.env.CLIENT_EMAIL;

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const response = await drive.files.list({
      q: `name contains '${keyword}'`,
      fields: 'files(name, webViewLink)',
    });

    const files = response.data.files;
    const searchResults = files.map((file) => ({
      name: file.name,
      link: file.webViewLink,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ searchResults }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};

// module.exports.handler();
