const { MongoClient } = require("mongodb");
require("dotenv").config();
const config = {
  url: process.env.url,
  dbName: process.env.dbName
};

async function createConnection() {
  const connection = await MongoClient.connect(config.url, {
    useNewUrlParser: true, useUnifiedTopology: true
  });
  const db = connection.db(config.dbName);
  console.log("User:" + process.env.user)
  console.log("Password:" + process.env.password)
  console.log("Collection:" + process.env.collectionName)
  console.log("DB name:" + process.env.dbName)
  console.log("URL:" + process.env.url)
  return {
    connection,
    db
  };
}

module.exports = createConnection;
