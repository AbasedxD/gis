var express = require('express');
var router = express.Router();

var db = require('../models/index');
var Envase = require('../models/envase');
var Produccion1 = require('../models/produccion1');
var Produccion2 = require('../models/produccion2');

//insert
router.post('/Insert/', function(req, res, next) {

    var Data = req.body;

    try{
        Envase.find({where: {Numero: Data.Numero}}).then(R => {
            R.Produccion1.FechaFabricacion = Data.FechaFabricacion;
            R.Produccion1.FechaVencimiento = Data.FechaVencimiento;
            R.Produccion1.Lote             = Data.Lote;
            R.Produccion1.Cantidad         = Data.Cantidad;
            R.Produccion1.HoraInicial      = Data.HoraInicial;
            R.Produccion2.HoraFinal        = Data.HoraFinal;
            R.Produccion2.Turno            = Data.Turno;
            R.Produccion2.Observaciones    = Data.Observaciones;
            R.Produccion2.PurezaFinal      = Data.PurezaFinal;
            R.Produccion2.PresionFinal     = Data.PresionFinal;
            R.save();
            R.Produccion1.save();
            R.Produccion2.save();
            res.json({Result: 1});
        })

    }catch(err){

    }
});

//delete
router.post('/Delete/', function(req, res, next) {

    var Data = req.body;

    try{
        Envase.find({where: {Numero: Data.Numero}}).then(R => {
          R.Produccion1.destroy();
          R.Produccion2.destroy();
          res.json({Result: 1});  
        })

    }catch(err){
        
    }

});

//update
router.post('/Update/', function(req, res, next) {

    var Data = req.body;

        Envase.findOne ({where: { Numero: Data.Numero, }, 
        include: [Produccion1, Produccion2]}).then(R => {
            R.Produccion1.FechaFabricacion = Data.FechaFabricacion;
            R.Produccion1.FechaVencimiento = Data.FechaVencimiento;
            R.Produccion1.Lote             = Data.Lote;
            R.Produccion1.Cantidad         = Data.Cantidad;
            R.Produccion1.HoraInicial      = Data.HoraInicial;
            R.Produccion2.HoraFinal        = Data.HoraFinal;
            R.Produccion2.Turno            = Data.Turno;
            R.Produccion2.Observaciones    = Data.Observaciones;
            R.Produccion2.PurezaFinal      = Data.PurezaFinal;
            R.Produccion2.PresionFinal     = Data.PresionFinal;
            R.save();
            R.Produccion1.save();
            R.Produccion2.save();
            res.json({Result: 1});
        })

});

//select
router.post('/Select/', function(req, res, next) {

    var Data = req.body;

    Envase.findOne({ where: {Numero: Data.Numero}, include: [Produccion1, Produccion2]})
    .then(result => {
    res.json(result);
    
  });

});