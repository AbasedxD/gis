var Sequelize = require('sequelize');
var db = require('./index');

var User = require('./user');
var Group = require('./group');

const UserGroup = db.define('UserGroup', {
    Id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
    UserId: {type: Sequelize.BIGINT, references: 'User', referencesKey: 'Id'},
    GroupId: {type: Sequelize.BIGINT, references: 'Group', referencesKey: 'Id'},
  },
  {
    timestamps: false,
    freezeTableName: true,
    schema: 'Auth'
  }
);

UserGroup.belongsTo (User);
UserGroup.belongsTo (Group);

module.exports = UserGroup;
