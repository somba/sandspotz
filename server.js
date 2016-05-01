"use strict";

const   
  server = require("./lib/app.js"),
  log = require('./lib/logger');

server.start(function (err) {
  if(err) throw err;
  else {
    log.info("server started");
  }
    
});