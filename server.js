// express web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Bryson!');
});

const port = 3000;

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + 'localhost:'+(process.env.port || port));