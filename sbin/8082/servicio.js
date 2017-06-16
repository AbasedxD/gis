const Sequelize = require('sequelize');
const url = require('url');
const express = require('express'); 
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

/*
 * 	sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });	
 * 
 */

server.post('/update',function(request, response)
{
	const sequelize = new Sequelize("postgres://unixjs:K3J9 8LMN 02F3 B3LW@localhost:5432/gis");	
		
	//console.log(request.body);
	//var fileJson = JSON.stringify(request.body);	
	//console.log(request.body["Objeto1"]);
	
	response.send(request.body);	
});

server.listen(8082);
