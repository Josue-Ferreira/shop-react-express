require('dotenv').config;
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT ?? 5000;
const userRouter = require('./router/userRouter');
const cartRouter = require('./router/cartRouter');

const buildPath = path.join(__dirname, '/client/build');

app.use(express.json());
app.use('/users', userRouter);
app.use('/cart', cartRouter);

app.use(express.static(buildPath));
app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
  })

app.listen(port,err => {
    err ? console.error(err) : console.log('Server is listening on port '+port);
});