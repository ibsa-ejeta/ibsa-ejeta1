const express = require('express');

const router = express.Router();

router.get('/Technical_Documentation', (req, res) => {
  res.render('technical');
});

module.exports = router;
