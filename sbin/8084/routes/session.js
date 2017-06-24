var express = require('express')
var router = express.Router()

var Crypt = require('../contrib/security').Crypt;
var User = require('../models/user');

router.post('/Start/', function (req, res, next) {
    var data = (req.body);

    User.findOne({ where: {UserName: data.UserName, Password: Crypt(data.Password)}})
    .then(R => {
      if(R !== null)
      {
        req.session.user = data.UserName;
        res.json({Result: 1})
      }
      else
      {
        res.json({Result: 0});
      }
    });
});

router.post('/Renew/', function (req, res, next) {
    var data = (req.body);

    if (req.session.user)
    {
      res.json({Result: 1});
    }
    else
    {
      res.json({Result: 0});
    }
});

router.post('/Terminate/', function (req, res, next) {
    var data = (req.body);

    req.session.user = undefined;
    res.json({Result: 1});
});

module.exports = router
