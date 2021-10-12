require('dotenv').config();

import restify from 'restify';
import morgan from 'morgan';
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
import initParse from './modules/initParse';
import { config } from './constants/config.constants';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Parse CRUD Application',
      version: '1.0.0',
      description: 'A Simple Express CRUD Parse APP',
    },
    servers: [
      {
        url: 'http://localhost:8080',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
server.use(morgan('dev'));

// Routes
server.use('/api/v1/posts', require('./routes/postRoutes'));
server.use('/api/v1/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;

const appId = config.APP_ID;
const javascriptKey = config.JAVASCRIPT_KEY;
const masterKey = config.MASTER_KEY;
const serverUrl = config.SERVER_URL;

server.listen(PORT, () => {
  initParse(appId, javascriptKey, masterKey, serverUrl);
  console.log(`Servering on port ${PORT}`);
});
