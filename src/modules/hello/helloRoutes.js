const HelloService = require('./helloService');

module.exports = async (fastify, opts) => {
  fastify.get('/hello/:name', async (request, reply) => {
    try {
      const { name } = request.params;
      const message = await HelloService.sayHello(name);
      return { message };
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });
};
