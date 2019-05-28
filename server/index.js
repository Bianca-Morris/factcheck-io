const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const api = require('./api');

// Serve html from the appropriate folder depending on deployment status
console.log("deployment status: ", process.env.NODE_ENV);
const inProduction = process.env.NODE_ENV === 'production';
const distPath = inProduction ? '../dist' : '../src/public/';

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api/', api);

app.get('/', (req, res) => {
  res.status(200);
  res.json({ success: true, index: '/' });
});

app.get('/app/*', (req, res) => {
  console.log(distPath);
  res.sendFile(path.join(__dirname, distPath, 'index.html'));
  // res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
