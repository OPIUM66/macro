module.exports = async (req, reply) => {
    if (!req.headers.authorization) {
      return reply.status(401).send({ error: 'Unauthorized' });
    }
  };
  