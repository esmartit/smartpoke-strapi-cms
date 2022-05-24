'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('kafka-websocket')
      .service('myService')
      .getWelcomeMessage();
  },
};
