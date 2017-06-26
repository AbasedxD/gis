var Sequelize = require('sequelize');
var db = require('./index');

var Envase = require('./envase');

const Produccion2 = db.define('Produccion2', {
    EnvaseId: {type: Sequelize.BIGINT, primaryKey: true, references: {Model: Envase, Key: 'Id'}},
    HoraFinal: Sequelize.TIME,
    Turno: Sequelize.TEXT,
    Observaciones: Sequelize.TEXT,
    PurezaFinal: Sequelize.DECIMAL,
    PresionFinal: Sequelize.DECIMAL,
  },
  {
    timestamps: false,
    freezeTableName: true,
    schema: 'Gis'
  }
);

Produccion2.belongsTo(Envase);
Envase.hasOne(Produccion2);

module.exports = Produccion2;