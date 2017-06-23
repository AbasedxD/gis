
local Session = require ("contrib/session");
local Http = require ("contrib/http");

local Data = Http.RequestJson();
ngx.header.content_type = "application/json; charset=utf-8";
ngx.say (Data["Nombre"]);
return;
