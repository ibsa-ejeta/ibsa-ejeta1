const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const http = require('http');
const _ = require('lodash');
const { json } = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');

require('dotenv').config();

const technicalRouter = require('./routes/technical');
const tributeRouter = require('./routes/tribute');
const landingRouter = require('./routes/landing');
const surveyRouter = require('./routes/survey');
const blogRouter = require('./routes/blog');

//
const app = express();
//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(express.json());

app.use(technicalRouter);
app.use(tributeRouter);
app.use(landingRouter);
app.use(surveyRouter);
app.use(blogRouter);

app.get('/', (req, res) => {
  res.render('homepage');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server started on port 3000!');
});

// $ git add .
// $ git commit -am "make it better"
// $ git push heroku master