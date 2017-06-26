var Sequelize = require('sequelize');


const db = new Sequelize('postgres://unixjs:K3J9 8LMN 02F3 B3LW@127.0.0.1:5432/gis');

db.authenticate()
.then(() => {
  console.log ('Connection is established successfully.');
})
.catch(err => {
  console.error ('Unable to connect to the database.', err);
});

module.exports = db;
