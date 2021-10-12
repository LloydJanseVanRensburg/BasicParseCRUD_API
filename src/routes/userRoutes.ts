import restify from 'restify';
const userControllers = require('../controllers/userControllers');

module.exports = (server: restify.Server) => {
  /**
   * @swagger
   * tags:
   *  name: Users
   *  description: The User Managing API
   */

  /**
   * @swagger
   * /api/v1/users/:
   *  get:
   *    summary: Returns list of all users
   *    tags: [Users]
   *    responses:
   *      200:
   *        description: The list of the books
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.get('/api/v1/users', userControllers.getAllUsers);

  /**
   * @swagger
   * /api/v1/users/{userId}:
   *  get:
   *    summary: Returns the found user by id
   *    tags: [Users]
   *    responses:
   *      200:
   *        description: Found User Object
   *      404:
   *        description: User not found
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.get('/api/v1/users/:userId', userControllers.getUserById);

  /**
   * @swagger
   * /api/v1/users/register:
   *  post:
   *    summary: Register and create a new user
   *    tags: [Users]
   *    responses:
   *      200:
   *        description: Returns logged in user
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.post('/api/v1/users/register', userControllers.register);

  /**
   * @swagger
   * /api/v1/users/login:
   *  post:
   *    summary: Login a returning user
   *    tags: [Users]
   *    responses:
   *      200:
   *        description: Authenticated user and token
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.post('/api/v1/users/login', userControllers.login);

  /**
   * @swagger
   * /api/v1/users/{userId}:
   *  put:
   *    summary: Update user by id
   *    tags: [Users]
   *    responses:
   *      200:
   *        description: The list of the books
   *      404:
   *        description: User not found
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.put('/api/v1/users/:userId', userControllers.updateUserById);

  /**
   * @swagger
   * /api/v1/users/{userId}:
   *  delete:
   *    summary: Returns list of all users
   *    tags: [Users]
   *    responses:
   *      200:
   *        description: The list of the books
   *      404:
   *        description: User not found
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.del('/api/v1/users/:userId', userControllers.deleteUserById);
};
