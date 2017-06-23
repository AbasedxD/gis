var express = require('express')
var router = express.Router()

var Crypt = require('./index').Crypt;
var User = require('../models/user');

// define the home page route
router.post('/', function (req, res) {
    var data = (req.body);
    
    if (data.Method === 'Insert')
    {
        User.create({ UserName: data.UserName, Password: Crypt(data.Password)})
        .then(() => {
            res.json({Result: 1});
        });
    }
})

module.exports = router
