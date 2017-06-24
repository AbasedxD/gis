var Sequelize = require('sequelize');
var db = require('./index');

const User = db.define('User', {
    Id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
    UserName: {type: Sequelize.STRING, unique: true},
    Password: Sequelize.STRING
  },
  {
    timestamps: false,
    freezeTableName: true,
    schema: 'Auth'
  }
);

module.exports = User;
