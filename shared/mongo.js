const { MongoClient } = require("mongodb");

const config = {
  url: `mongodb+srv://${process.env.user}:${process.env.password}@cluster0-3tm0n.mongodb.net/test?retryWrites=true&w=majority`,
  dbName: process.env.dbName
};

async function createConnection() {
  const connection = await MongoClient.connect(config.url, {
    useNewUrlParser: true,useUnifiedTopology: true 
  });
  const db = connection.db(config.dbName);
  return {
    connection,
    db
  };
}

module.exports = createConnection;
