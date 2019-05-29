const router = require('express').Router();
const os = require('os');

router.get('/getUsername', (req, res) => {
  res.json({ username: os.userInfo().username, success: true, index: '/api/getUsername' });
});

router.get('/', (req, res) => {
  res.status(200);
  res.json({ success: true, index: '/api/' });
});

module.exports = router;
