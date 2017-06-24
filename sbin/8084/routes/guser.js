var express = require('express')
var router = express.Router()

var Crypt = require('./index').Crypt;
var User = require('../models/User');
var UserBasicInfo = require('../models/UserBasicInfo');
var UserComplementaryInfo = require('../models/UserComplementaryInfo');

// define the home page route
router.post('/', function (req, res) {
    var data = (req.body);

    User.create({
      UserName: data.UserName,
      Password: Crypt(data.Password),
      UserBasicInfo:{
        DocumentType: Data.DocumentType,
        DocumentNum: Data.DocumentNum,
        Country: Data.Country,
        Name: Data.Name,
        LastName: Data.LastName
      },
      UserComplementaryInfo: {
        Avatar: Data.Avatar,
        Phone: Data.Phone,
        Email: Data.Email,
        Address: Data.Address
      }
    },
    {
      include: [UserBasicInfo, UserComplementaryInfo]
    })
    .then(() => {
      res.json({Result: 1});
    });
})

module.exports = router
