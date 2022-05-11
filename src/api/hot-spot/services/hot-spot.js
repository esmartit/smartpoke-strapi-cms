'use strict';

/**
 * hot-spot service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-spot.hot-spot');
