const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const math = require('math');
const { json } = require('body-parser');

const router = express.Router();

//Use the following for localhost
// const surveying = mongoose.createConnection(
//   'mongodb://localhost:27017/surveyDB',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// Use the following for Heroku
const surveying = mongoose.createConnection(process.env.MONGODB_URI2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const surveySchema = {
  fullname: String,
  email: String,
  age: Number,
  birthdate: String,
  countrycode: Number,
  phonenumber: Number,
  jobtitle: String,
  recommendation: String,
  bestproject: String,
  improve: Array,
  comments: String,
};

const Survey = surveying.model('Survey', surveySchema);

router.get('/Survey_Form', async (req, res) => {
  let date = new Date();
  let today = date.toDateString();

  // Use the following for Heroku
  const api_url =
    'https://api.openweathermap.org/data/2.5/weather?appid=' +
    process.env.APPID +
    '&q=Toronto&units=metric';

  const response = await fetch(api_url);
  const json1 = await response.json();
  let temperature = math.round(json1.main.temp);
  let imgIcon = json1.weather[0].icon;
  let imageIcon = 'https://openweathermap.org/img/wn/' + imgIcon + '@2x.png';

  res.render('survey', {
    temperature: temperature,
    today: today,
    imageIcon: imageIcon,
  });
});

router.post('/Survey_Form', (req, res) => {
  const survey = new Survey({
    fullname: req.body.fullname,
    email: req.body.email,
    age: req.body.age,
    birthdate: req.body.birthdate,
    countrycode: req.body.countrycode,
    phonenumber: req.body.phonenumber,
    jobtitle: req.body.jobtitle,
    recommendation: req.body.recommendation,
    bestproject: req.body.bestproject,
    improve: req.body.improve,
    comments: req.body.comments,
  });

  survey.save((err) => {
    if (!err) {
      res.send('Survey submitted successfully. Thank you for your time!');
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
