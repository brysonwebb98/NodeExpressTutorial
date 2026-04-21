const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.homeRoute);
routes.get('/bryson', lesson1Controller.brysonRoute);
routes.get('/george', lesson1Controller.georgeRoute);
routes.get('/moroni', lesson1Controller.moroniRoute);

module.exports = routes;