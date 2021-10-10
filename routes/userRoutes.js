const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();

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
router.get('/', userControllers.getAllUsers);

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
router.get('/:userId', userControllers.getUserById);

/**
 * @swagger
 * /api/v1/users/:
 *  post:
 *    summary: Create a new user and returns the newly created user
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: The list of the books
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */
router.post('/', userControllers.createNewUser);

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
router.put('/:userId', userControllers.updateUserById);

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
router.delete('/:userId', userControllers.deleteUserById);

module.exports = router;
