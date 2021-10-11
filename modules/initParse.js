const Parse = require('parse/node');

const initParse = (appId, javascriptKey, masterKey, serverUrl) => {
  Parse.initialize(appId, javascriptKey, masterKey);
  Parse.serverURL = serverUrl;
};

module.exports = initParse;
