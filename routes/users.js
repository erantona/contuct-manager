const express = require('express');

const router = express.Router();

// @routes ===> POST
// @desc =====> Resister User
// @acess ====> Public
router.post('/', (req, res) => {
  res.send('Resister Users');
});

module.exports = router;
