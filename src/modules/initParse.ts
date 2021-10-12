import Parse from 'parse/node';

const initParse = (
  appId: string,
  javascriptKey: string,
  masterKey: string,
  serverUrl: string
) => {
  Parse.initialize(appId, javascriptKey, masterKey);
  Parse.serverURL = serverUrl;
};

export default initParse;
