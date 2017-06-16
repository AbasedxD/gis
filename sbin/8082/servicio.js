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
	
	sequelize
	.authenticate()
	.then(()=>{

		var sql1 = "WITH 'Envase1' AS(UPDATE 'Gis'.'Envase' SET 'NumeroInterno'="+request.body["NumeroInterno"]  
			+",'Material'='"+request.body["Material"]+"','Capacidad'="+request.body["Capacidad"]+",'ClaseProducto'='"+
			request.body["ClaseProducto"]+"','NormaTecnica'='"+request.body["NormaTecnica"]+"' WHERE 'Gis'.'Envase'.'Numero'="+
			request.body["Numero"]+" RETURNING 'Id' AS 'EnvaseId')";
			
		var sql2 = "Envase2 AS(UPDATE 'Gis'.'EnvaseComplementaryInfo' SET 'Presion'="+
			request.body["Presion"]+",'AlturaConValvula'="+request.body["AlturaConValvula"]+",'PesoConValvula'="+
			request.body["PesoConValvula"]+",'Valvula'="+request.body["Valvula"]+",'TipoValvula'='"+
			request.body["TipoValvula"]+"','AcabadoColor'='"+request.body["AcabadoColor"]+"' FROM(SELECT 'EnvaseId' FROM Envase1) "+
			"AS Envase1 WHERE 'Gis'.'EnvaseComplementaryInfo'.'EnvaseId'='Envase1'.'EnvaseId' "+
			"RETURNING 'Envase1'.'EnvaseId' AS 'EnvaseId')";
			
		var sql3 = "UPDATE 'Gis'.'EnvaseGeneralidades' SET 'Proveedor'='"+request.body["Proveedor"]+"','FechaCompra'='"+
			request.body["FechaCompra"]+"','Garantia'="+request.body["Garantia"]+",'FechaFabricacion'='"+
			request.body["FechaFabricacion"]+"','PruebaHidrostatica'="+request.body["PruebaHidrostatica"]+",'Alquilado'="+
			request.body["Alquilado"]+",'FechaAlquiler'='"+request.body["FechaAlquiler"]+"','Observaciones'='"+
			request.body["Observaciones"]+"' FROM(SELECT 'Envase1'.'EnvaseId' FROM 'Envase1') AS 'Envase1' "+
			"WHERE 'Gis'.'EnvaseGeneralidades'.'EnvaseId'='Envase1'.'EnvaseId';";
			
		var consulta = sql1+", "+sql2+" "+sql3;		
		
		sequelize.query(consulta).spread((resultado,metadatos)=>{
			console.log(resultado);
			console.log(metadatos);
		});
		
	})
	.catch(err => {
		//Retorno de error por excepcion
		var errorJSON = {"Error": err};
		response.send(errorJSON); 
	});
		

		
	//console.log(request.body);
	//var fileJson = JSON.stringify(request.body);	
	//console.log(request.body["Objeto1"]);
	
	//response.send(request.body);	
});

server.listen(8082);
