const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Wiki home page')
})

router.get('/about', function(req, res, next) {
    res.send('About this wiki')
})

module.exports = router;