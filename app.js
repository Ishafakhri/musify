/**
 * @license Apache-2.0
 * @copyright ishafakhri 2024
 */

'use strict';

/**
 * node modules
 */
const cors = require('cors'); 
const cookieParser = require('cookie-parser');

/**
 * custom modules
 */
const login = require('./src/routes/login.route');


// initialize express app
const express = require('express');
const app = express();

/**
 * EJS setting
 */
app.set('view engine', 'ejs');

/**
 * setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * enable cors & cookie parser
 */
app.use(cors()).use(cookieParser());

/**
 * Login page
 */
app.use('/login', login);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});