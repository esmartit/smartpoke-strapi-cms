'use strict';

/**
 * stored-event service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stored-event.stored-event');
