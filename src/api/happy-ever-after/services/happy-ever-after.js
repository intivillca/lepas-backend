'use strict';

/**
 * happy-ever-after service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::happy-ever-after.happy-ever-after');
