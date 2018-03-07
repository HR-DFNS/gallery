const express = require('express');
const mongoose = require('mongoose');
const Photos = require('../../database/index.js');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Photos.findOne(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(data);
        console.log('hello from the router: ', id)
      }
    });
  });

// router.route('/restaurants/:id')
//   .get((req, res) => { console.log('hello from server'); });

module.exports = router;
