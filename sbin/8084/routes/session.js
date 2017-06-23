var express = require('express')
var router = express.Router()

var Crypt = require('../contrib/security').Crypt;
var User = require('../models/user');

router.post('/', function (req, res, next) {
    var data = (req.body);
    if (data.Method === 'Start')
    {
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
    }

    else if (data.Method === 'Renew')
    {
        if (req.session.user)
        {
            res.json({Result: 1});
        }
        res.json({Result: true});
    }

    else if (data.Method === 'Terminate')
    {
        req.session.user = undefined;
        res.json({Result: 1});
    }

    else
    {
        res.json({Result: 0, Error: 'Method not supported.'});
    }
})

module.exports = router
