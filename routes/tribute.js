const express = require('express');

const router = express.Router();

router.get('/Tribute_Page', (req, res) => {
  res.render('tribute');
});

module.exports = router;
