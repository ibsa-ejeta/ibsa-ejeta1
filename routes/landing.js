const express = require('express');
const https = require('https');

const router = express.Router();

router.get('/Landing_Page', (req, res) => {
  res.render('landing');
});

router.post('/Landing_Page', (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = 'https://us4.api.mailchimp.com/3.0/lists/' + process.env.URL1;
  const options = {
    method: 'POST',
    auth: 'anystring:' + process.env.API,
  };
  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
      res.render('landing2');
    } else {
      res.render('landing3');
    }
    response.on('data', (data) => {
      // console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

module.exports = router;