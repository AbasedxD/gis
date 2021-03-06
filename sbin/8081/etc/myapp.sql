CREATE SCHEMA IF NOT EXISTS "Auth";

CREATE TABLE IF NOT EXISTS "Auth"."User"
(
  "Id" BIGSERIAL PRIMARY KEY,
  "FirstName" TEXT,
  "LastName" TEXT
);

CREATE TABLE IF NOT EXISTS "Auth"."UserInfo"
(
  "UserId" BIGINT PRIMARY KEY REFERENCES "Auth"."User" ("Id") ON UPDATE CASCADE ON DELETE CASCADE,
  "Address" TEXT,
  "Movil" TEXT,
  "Hb" DATE
);

CREATE TABLE IF NOT EXISTS "Auth"."UserComplementary"
(
  "UserId" BIGINT PRIMARY KEY REFERENCES "Auth"."User" ("Id") ON UPDATE CASCADE ON DELETE CASCADE,
  "Rh" TEXT,
  "Job" TEXT
);
