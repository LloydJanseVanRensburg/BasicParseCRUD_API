const postControllers = require('../controllers/postControllers');
import restify from 'restify';

module.exports = (server: restify.Server) => {
  /**
   * @swagger
   * tags:
   *  name: Posts
   *  description: The Posts Managing API
   */

  /**
   * @swagger
   * /api/v1/posts/:
   *  get:
   *    summary: Returns list of all posts
   *    tags: [Posts]
   *    responses:
   *      200:
   *        description: The list of the posts
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.get('/api/v1/posts', postControllers.getAllPosts);

  /**
   * @swagger
   * /api/v1/posts/:
   *  post:
   *    summary: Create a new post in database
   *    tags: [Posts]
   *    responses:
   *      200:
   *        description: Newly created post
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.post('/api/v1/posts', postControllers.createNewPost);

  /**
   * @swagger
   * /api/v1/posts/{postId}:
   *  get:
   *    summary: Returns the found post by id
   *    tags: [Posts]
   *    responses:
   *      200:
   *        description: Found Post Object
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.get('/api/v1/posts/:id', postControllers.getPostById);

  /**
   * @swagger
   * /api/v1/posts/{postId}:
   *  put:
   *    summary: Returns the update version of post
   *    tags: [Posts]
   *    responses:
   *      201:
   *        description: Post successfully updated
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.put('/api/v1/posts/:id', postControllers.updatePostById);

  /**
   * @swagger
   * /api/v1/posts/{postId}:
   *  delete:
   *    summary: Delete the post with id
   *    tags: [Users]
   *    responses:
   *      203:
   *        description: Successfully delete post
   *      400:
   *        description: Bad Request
   *      500:
   *        description: Internal Server Error
   */
  server.del('/api/v1/posts/:id', postControllers.deletePostById);
};
