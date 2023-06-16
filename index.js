require('dotenv').config;
const express = require('express');
const app = express();
const port = process.env.PORT ?? 5000;
const userRouter = require('./router/userRouter');
const cartRouter = require('./router/cartRouter');

app.use(express.json());
app.use('/users', userRouter);
app.use('/cart', cartRouter);

app.listen(port,err => {
    err ? console.error(err) : console.log('Server is listening on port '+port);
});