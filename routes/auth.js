const express = require('express');

const router = express.Router();

// @routes ===> GET
// @desc =====> Get logged in user
// @acess ====> Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @routes ===> POST
// @desc =====> Auth user and get token
// @acess ====> Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;