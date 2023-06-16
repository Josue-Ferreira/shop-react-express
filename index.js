require('dotenv').config;
const express = require('express');
const app = express();
const port = process.env.PORT ?? 5000;

app.listen(port,err => {
    err ? console.error(err) : console.log('Server is listening on port '+port);
});