const router = require('express').Router();
const os = require('os');

const { User } = require('./db/models');

router.get('/getUsername', (req, res) => {
  res.json({ username: os.userInfo().username, success: true, index: '/api/getUsername' });
});

router.get('/createUserTest', (req, res) => {
  User.create({ username: 'test', hash: 'test' })
    .then((user) => {
      console.log('New user created successfully!');
      console.log('username: ', user.get('username'));
      console.log('password: ', user.get('password'));
      res.json({ success: true, user });
    })
    .catch((err) => {
      console.log('Error creating user!');
      res.json({ error: err });
    });
});

router.get('/', (req, res) => {
  res.status(200);
  res.json({ success: true, index: '/api/' });
});

module.exports = router;
