'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('kafka-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
};
