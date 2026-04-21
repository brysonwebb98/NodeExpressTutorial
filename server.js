const lesson1Controller = require('./controllers/lesson1');
const express = require('express');
const app = express();

app.get('/', lesson1Controller.homeRoute);

app.get('/bryson', lesson1Controller.brysonRoute);

app.get('/george', lesson1Controller.georgeRoute);

app.get('/moroni', lesson1Controller.moroniRoute);

const port = 3000;

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + 'localhost:'+(process.env.port || port));