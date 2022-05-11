'use strict';

/**
 * hot-spot router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hot-spot.hot-spot');
