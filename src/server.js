const loader = require('./loader');

(async () => {
  const app = await loader();
  try {
    await app.listen({ port: 3000 });
    console.log('Fastify server running at http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
