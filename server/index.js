const express = require('express');
const path = require('path');
const api = require('./api');

// Initialize express server instance
const app = express();

// Pick port depending on environment
const port = process.env.PORT || 8080;

// Serve html from the appropriate folder depending on deployment status
console.log("Production flag active?: ", process.env.NODE_ENV === 'production');
const inProduction = process.env.NODE_ENV === 'production';
const distPath = inProduction ? '../dist' : '../src/public/';

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api/', api); // Connect separate file with API-specific routes

// Respond with static index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/public/index.html'));
});

// Serve static HTML with bundled react scripts
app.get('/app*', (req, res) => {
  res.sendFile(path.join(__dirname, distPath, 'app.html'));
});

// Begin accepting HTTP requests
app.listen(port, () => console.log(`Listening on port ${port}!`));
