var Sequelize = require('sequelize');
var db = require('./index');

var User = require('./User');

const UserComplementaryInfo = db.define('UserComplementaryInfo', {
    UserId: {type: Sequelize.BIGINT, primaryKey: true, references: User, referencesKey: 'Id'},
    Avatar: {type: Sequelize.BIGINT, references: User, referencesKey: 'Id'},
    Phone: Sequelize.STRING,
    Email: Sequelize.STRING,
    Address: Sequelize.STRING
  },
  {
    timestamps: false,
    freezeTableName: true,
    schema: 'Auth'
  }
);

UserComplementaryInfo.belongsTo(User);
User.hasOne(UserComplementaryInfo);

module.exports = UserComplementaryInfo;
