'use strict';

/**
 * pas service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pas.pas');
