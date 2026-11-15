const https = require('https');

https.get('https://api.crossref.org/works?query=Electromagnetism&select=title,author,abstract,URL,created&rows=5', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(JSON.parse(data).message.items[0]);
  });
}).on('error', (err) => {
  console.error(err);
});
