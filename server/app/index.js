'use strict';
const path = require('path');
const express = require('express');
const app = express();

module.exports = app;

require('./configure')(app);

app.use('/api', require('./routes'));

app.use(function (req, res, next) {
    (path.extname(req.path).length) ? res.status(404).end() : next(null);
});

app.get('/*', (req, res) => {
    res.sendFile(app.get('indexHTMLPath'));
});

app.use(function (err, req, res, next) {
    console.error(err)
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});