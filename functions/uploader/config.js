const config = require('../config');

module.exports = {
  endpoints: config.endpoints,
  dfendpoints: {
    DF_ENTITY_GET_URL: 'https://api.dialogflow.com/v1/entities/{{entityname}}?v=20150910',
    DF_ENTITY_POST_URL: 'https://api.dialogflow.com/v1/entities/{{entityname}}/entries?v=20150910',
    DF_ENTITY_DELETE_URL: 'https://api.dialogflow.com/v1/entities/{{entityname}}?v=20150910',
  },
};
