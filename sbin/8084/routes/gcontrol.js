var express = require('express')
var router = express.Router()

var User = require('../models/user');
var UserGroup = require('../models/usergroup');
var AppRole = require('../models/approle');

// define the home page route
router.post('/', function (req, res) {
    var data = (req.body);

    if (!req.session.user)
    {
        res.json([]);
        return;
    }

    if (data.Method === 'Select')
    {
      User.findOne({ where: {UserName: req.session.user}})
      .then(R => {
          if(R !== null)
          {
              UserGroup.findOne({ where: {UserId: R.Id}})
              .then(R => {
                  if(R !== null)
                  {
                      AppRole.findAll({ where: {GroupId: R.Id}})
                      .then(R => {
                          if(R !== null)
                          {
                              res.json(R);
                          }
                          else
                          {
                              res.json([]);
                          }
                      });
                  }
                  else
                  {
                      res.json([]);
                  }
              });
          }
          else
          {
              res.json([]);
          }
      });
    }
})

module.exports = router
