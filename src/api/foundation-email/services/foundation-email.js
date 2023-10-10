'use strict';

/**
 * foundation-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::foundation-email.foundation-email');
