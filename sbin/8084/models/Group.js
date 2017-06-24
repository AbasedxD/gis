var Sequelize = require('sequelize');
var db = require('./index');

const Group = db.define('Group', {
    Id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
    Name: {type: Sequelize.STRING, unique: true},
  },
  {
    timestamps: false,
    freezeTableName: true,
    schema: 'Auth'
  }
);

module.exports = Group;
