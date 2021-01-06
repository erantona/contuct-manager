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
router.post(
  '/',
  auth,
  [check('name', 'Nmae is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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
