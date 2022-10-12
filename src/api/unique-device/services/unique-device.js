'use strict';

/**
 * unique-device service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unique-device.unique-device');
