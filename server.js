require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const initParse = require('./modules/initParse');

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

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(morgan('dev'));

// Routes
app.use('/api/v1/posts', require('./routes/postRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;

const appId = process.env.PARSE_APP_ID;
const javascriptKey = process.env.PARSE_JS_KEY;
const masterKey = process.env.PARSE_MASTER_KEY;
const serverUrl = process.env.PARSE_SERVER_URL;

app.listen(PORT, () => {
  initParse(appId, javascriptKey, masterKey, serverUrl);
  console.log(`Servering on port ${PORT}`);
});
