var mongodb = require('mongodb');
module.exports = {
  dbconnection: new mongodb.Server("127.0.0.1", 27017, {}),
}