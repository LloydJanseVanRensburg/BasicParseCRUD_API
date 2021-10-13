require('dotenv').config();

import restify from 'restify';
import morgan from 'morgan';
import restifySwaggerJsdoc from 'restify-swagger-jsdoc';

import initParse from './modules/initParse';
import { config } from './constants/config.constants';

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

const appId = config.APP_ID;
const javascriptKey = config.JAVASCRIPT_KEY;
const masterKey = config.MASTER_KEY;
const serverUrl = config.SERVER_URL;

restifySwaggerJsdoc.createSwaggerPage({
  title: 'API documentation',
  version: '1.0.0',
  server: server,
  path: '/api-docs',
  description:
    'This is a basic project using Parse - Node and Restify - with TypeScript',
  apis: ['./public/apidocs/apidocs.yaml'],
});

server.listen(PORT, () => {
  initParse(appId, javascriptKey, masterKey, serverUrl);
  require('./routes/userRoutes')(server);
  require('./routes/postRoutes')(server);
  console.log(`Servering on port ${PORT}`);
});
