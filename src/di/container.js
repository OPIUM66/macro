const { EventEmitter } = require('events');
const fastify = require('fastify');

const container = {
  eventBus: new EventEmitter(),
  fastify: fastify({ logger: true }),
};

module.exports = container;
