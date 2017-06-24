var Sequelize = require('sequelize');
var db = require('./index');

var User = require('./User');

const UserBasicInfo = db.define('UserBasicInfo', {
    UserId: {type: Sequelize.BIGINT, primaryKey: true, references: User, referencesKey: 'Id'},
    DocumentType: Sequelize.STRING,
    DocumentNum: Sequelize.STRING,
    Country: Sequelize.STRING,
    Name: Sequelize.STRING,
    LastName: Sequelize.STRING
  },
  {
    indexes: [{type: unique, columns: [DocumentType, DocumentNum, Country]}],
    timestamps: false,
    freezeTableName: true,
    schema: 'Auth'
  }
);

UserBasicInfo.belongsTo(User);
User.hasOne(UserBasicInfo);

module.exports = UserBasicInfo;
