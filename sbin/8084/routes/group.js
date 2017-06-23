var express = require('express')
var router = express.Router()

var Crypt = require('./index').Crypt;
var User = require('../models/group');

// define the home page route
router.post('/', function (req, res) {
    var data = (req.body);

    if (data.Method === 'Insert')
    {
        Group.create({ Name: data.Name })
        .then(() => {
            if()
            res.json({Result: 1});
        });
    }
})

module.exports = router
