const postControllers = require('../controllers/postControllers');
import restify from 'restify';

module.exports = (server: restify.Server) => {
  server.get('/api/v1/posts', postControllers.getAllPosts);

  server.post('/api/v1/posts', postControllers.createNewPost);

  server.get('/api/v1/posts/:id', postControllers.getPostById);

  server.put('/api/v1/posts/:id', postControllers.updatePostById);

  server.del('/api/v1/posts/:id', postControllers.deletePostById);
};
