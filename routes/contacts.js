const express = require('express');

const router = express.Router();

// @routes ===> GET api/conatacts
// @desc =====> Get all user contacts
// @acess ====> Private
router.get('/', (req, res) => {
  res.send('Get all user contacts');
});

// @routes ===> POST api/conatacts
// @desc =====> Add a contact
// @acess ====> Private
router.post('/', (req, res) => {
  res.send('Add a contact');
});

// @routes ===> PUT api/conatacts:id
// @desc =====> Update contact
// @acess ====> Private
router.put('/', (req, res) => {
  res.send('Update contact');
});

// @routes ===> DELETE api/conatacts:id
// @desc =====> Delete contact
// @acess ====> Private
router.delete('/', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
