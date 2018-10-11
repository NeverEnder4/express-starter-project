const express = require('express');

const route = express.Router();

route.get('/', (req, res, next) => {
  res.render('index', {
    headline: 'Express Starter Project',
    tagline: 'Welcome to the home page. You are using EJS as a templating engine!'
  });
});

module.exports = route;