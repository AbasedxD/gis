var Sequelize = require('sequelize');
var db = require('./index');

var Envase = require('./envase');

const Produccion1 = db.define('Produccion1', {
    EnvaseId: {type: Sequelize.BIGINT, primaryKey: true, references: {Model: Envase, Key: 'Id'}},
    FechaFabricacion: {type: Sequelize.DATEONLY, get: function(){var value=this.getDataValue('FechaFabricacion');return(value!==null)?Moment.utc(value).format('YYYY-MM-DD'):null}},
    FechaVencimiento: {type: Sequelize.DATEONLY, get: function(){var value=this.getDataValue('FechaVencimiento');return(value!==null)?Moment.utc(value).format('YYYY-MM-DD'):null}},
    Lote: Sequelize.INTEGER,
    Cantidad: Sequelize.DECIMAL,
    HoraInicial: Sequelize.TIME,
  },
  {
    timestamps: false,
    freezeTableName: true,
    schema: 'Gis'
  }
);

Produccion1.belongsTo(Envase);
Envase.hasOne(Produccion1);

module.exports = Produccion1;