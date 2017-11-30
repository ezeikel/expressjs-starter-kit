const express = require('express');
const router = express.Router();

// do work here
router.get('/', (req, res, next) => {
  res.send('Hey! It works');
});

module.exports = router;
