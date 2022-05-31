'use strict';

/**
 * macka service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::macka.macka');
