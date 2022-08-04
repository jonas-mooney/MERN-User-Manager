const express = require('express');
const router = express.Router();
const Youser = require('../models/userModel')

//Routes
// app was replaced with router
router.get('/', (req, res) => {
  Youser.find({  })
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error)
  })
})

router.post('/save', (req, res) => {
  const data = req.body;
  const newUser = new Youser(data);
  newUser.save((err) => {
    if (err) {
      res.status(500).json({ msg: 'Internal server error' });
      return;
    }
      return res.json({
        msg: 'Data has been recieved. POST req successful'
      })
  })
})


router.post('/update', (req, res) => {
  const data = req.body;
  Youser.findOneAndUpdate({id: data.id},
    { first_name: data.first_name,
      last_name: data.last_name,
      email_address: data.email_address,
      age: data.age
    })
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error)
  })
})

router.post('/delete', (req, res) => {
  const data = req.body;
  Youser.findOneAndDelete({id: data.id})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log(error)
      })
})

module.exports = router;