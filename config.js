var mongodb = require('mongodb');
module.exports = {
  dbconnection: new mongodb.Server(process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1"
                                   , process.env.OPENSHIFT_MONGODB_DB_PORT || 27017, {}),
  ipaddr: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
  port: process.env.OPENSHIFT_NODEJS_PORT || 3000
}