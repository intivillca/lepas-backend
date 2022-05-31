'use strict';

/**
 * udomi-psa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::udomi-psa.udomi-psa');
