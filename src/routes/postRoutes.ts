const postControllers = require('../controllers/postControllers');
import restify from 'restify';

module.exports = (server: restify.Server) => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     Post:
   *       type: object
   *       required:
   *         - title
   *         - content
   *       properties:
   *         objectId:
   *           type: string
   *           description: The auto-generated id of the post
   *         title:
   *           type: string
   *           description: The post title
   *         content:
   *           type: string
   *           description: The post content
   *       example:
   *         objectId: d5fE_asz
   *         title: hello world title
   *         content: lorem ipsum ltsoe rivc cis lorem ipsum ltsoe rivc cis
   */

  /**
   * @swagger
   * tags:
   *   name: Posts
   *   description: The posts managing API
   */

  server.get('/api/v1/posts', postControllers.getAllPosts);

  /**
   * @swagger
   * /api/v1/posts:
   *   post:
   *     summary: Create a new post
   *     tags: [Posts]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Post'
   *     responses:
   *       200:
   *         description: The post was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Post'
   *       500:
   *         description: Some server error
   */
  server.post('/api/v1/posts', postControllers.createNewPost);

  server.get('/api/v1/posts/:id', postControllers.getPostById);

  server.put('/api/v1/posts/:id', postControllers.updatePostById);

  server.del('/api/v1/posts/:id', postControllers.deletePostById);
};
