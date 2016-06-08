'use strict';
const router = require('express').Router();
module.exports = router;

router.get('/secret-stash', function (req, res) {
    res.send('secret-stash');
});