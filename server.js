'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const requestTime = require('./requestTime.js');
const notFound = require('./404.js');
const errHandler = require('./error.js');
const logger = require('./logger.js');
const numberizer = require('./numberizer.js')
const router = require('./routes.js')

app.use(requestTime);
app.use(logger);
app.use(router)
app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', numberizer(5), (req,res) => {
  res.status(200).send(`Route B with number ${req.number}`);
});

app.get('*', notFound);

app.use(errHandler);



app.listen(PORT, () => console.log(`Listening on ${PORT}`));