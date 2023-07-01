'use strict';

/**
 * add controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::add.add');
