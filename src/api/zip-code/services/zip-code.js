'use strict';

/**
 * zip-code service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zip-code.zip-code');
