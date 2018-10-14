const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// Helps to protect headers
app.use(helmet());

// Parses JSON, URL encoded, and cookie data
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());

// Sets view engine and default views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use public as static assets directory
app.use(express.static(path.join(__dirname, 'public')));

// Import express.Router object
const indexRoute = require('./routes/index');

// Use express.Router object, indexRoute for the home route
app.use('/', indexRoute);

// Set PORT to be either the env variable or 3000
const PORT = process.env.PORT || 3000;

// Server is listening for http messages on port 3000 in dev environment
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});