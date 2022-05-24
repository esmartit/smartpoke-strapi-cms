'use strict';

const cb = (strapi) => {
  // import socket io
  const io = require('socket.io')(strapi.server.httpServer, { path: '/smartpoke/socket.io' });
  // listen for user connection
  io.on('connection', function (socket) {    
    socket.on('disconnect', () => console.log('a user disconnected'));
  });
  strapi.io = io; // register socket io inside strapi main object to use it globally anywhere  
};

module.exports = ({ strapi }) => {
  console.log("Websocket bootstrap")
  cb(strapi);
};