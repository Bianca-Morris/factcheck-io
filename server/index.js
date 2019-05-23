const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.status(200);
  res.json({ success: true, index: '/' });
});

app.get('/api/getUsername', (req, res) => {
  res.json({ username: os.userInfo().username });
});

app.get('/api', (req, res) => {
  res.status(200);
  res.json({ success: true, index: '/api' });
});


app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
  res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
