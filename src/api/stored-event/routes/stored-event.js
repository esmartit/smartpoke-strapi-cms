'use strict';

/**
 * stored-event router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stored-event.stored-event');
