const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')

app.use('/dist', express.static('dist')); 

app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')))

module.exports = app