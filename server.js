const express = require('express');
const app = express();

const port = 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + 'localhost:'+(process.env.port || port));