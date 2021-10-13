import restify from 'restify';
const userControllers = require('../controllers/userControllers');

module.exports = (server: restify.Server) => {
  server.get('/api/v1/users', userControllers.getAllUsers);

  server.get('/api/v1/users/:userId', userControllers.getUserById);

  server.post('/api/v1/users/register', userControllers.register);

  server.post('/api/v1/users/login', userControllers.login);

  server.put('/api/v1/users/:userId', userControllers.updateUserById);

  server.del('/api/v1/users/:userId', userControllers.deleteUserById);
};
