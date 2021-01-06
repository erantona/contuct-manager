const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @routes ===> GET api/conatacts
// @desc =====> Get all user contacts
// @acess ====> Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
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
