'use strict';

require('dotenv').load(); 

const 
  Hapi = require('hapi'),
  server = new Hapi.Server(),
  inert = require('inert')

server.connection({ 
    host: process.env.HOST || '0.0.0.0', 
    port: process.env.PORT || 80
})

server.register(inert, (err) => {
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  }) 
})

module.exports = server;
