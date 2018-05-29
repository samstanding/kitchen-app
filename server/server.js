const express = require('express');
require('dotenv').config();

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const kitchenRouter = require('./routes/kitchen.router');

app.use('/api/kitchen', kitchenRouter);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT);
})