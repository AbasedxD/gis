var Sequelize = require('sequelize');
var db = require('./index');

var User = require('./user');

const Media = db.define('Media', {
    Id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
    Name: Sequelize.STRING,
    Type: Sequelize.STRING,
    FileName: Sequelize.STRING,
    UserId: {type: Sequelize.BIGINT, references: User, referencesKey: 'Id'},
  },
  {
    indexes: [{type: unique, columns: [Name, Type]}],
    timestamps: false,
    freezeTableName: true,
    schema: 'public'
  }
);

module.exports = Media;
