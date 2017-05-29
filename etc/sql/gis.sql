WITH "Ins1" AS (INSERT INTO "Gis"."Envase"("Numero", "NumeroInterno", "Material", "Capacidad", "ClaseProducto", "NormaTecnica")
		VALUES(255, 588, 'Metal', 100, 'rara', 'ISO34') RETURNING "Id" AS "EnvaseId"),

     "Ins2" AS (INSERT INTO "Gis"."EnvaseComplementaryInfo"("EnvaseId", "Presion", "AlturaConValvula", "PesoConValvula", "Valvula", "TipoValvula", "AcabadoColor")
		SELECT "EnvaseId", 8500, 4500, 7800, false, 'esrer', 'ewwarr' FROM "Ins1" RETURNING "EnvaseId")

		INSERT INTO "Gis"."EnvaseGeneralidades" ("EnvaseId", "Proveedor", "FechaCompra", "Garantia", "FechaFabricacion", "PruebaHidrostatica", "Alquilado", "FechaAlquiler", "Observaciones")
		SELECT "Ins1"."EnvaseId", 'juanchoProvee', '2010-06-23'::DATE, true, '2010-06-23'::DATE, false, false, '2010-06-23'::DATE, 'servlet' ;