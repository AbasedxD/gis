var express = require('express')
var router = express.Router()

var Crypt = require('./index').Crypt;
var User = require('../models/group');

router.post('/Select/', function (req, res) {
    var data = (req.body);

    Group.findOne({ Name: data.Name })
    .then(Result => {
        res.json(Result);
    });
});

router.post('/insert/', function (req, res) {
    var data = (req.body);

    Group.create({ Name: data.Name })
    .then(() => {
        res.json({Result: 1});
    });
});

module.exports = router
