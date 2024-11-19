const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'e-comm',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

