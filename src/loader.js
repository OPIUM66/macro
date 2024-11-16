const fastify = require('./di/container.js').fastify;
const eventBus = require('./events/eventBus.js');
const startGrpcServer = require('./gprc/greeterServer.js');

module.exports = async () => {
  // Load Middlewares
  fastify.decorate('auth', require('./middlewares/auth.js'));

  // Load Routes
  fastify.register(require('./modules/hello/helloRoutes.js'));

  // Start gRPC Server
  startGrpcServer();

  return fastify;
};
