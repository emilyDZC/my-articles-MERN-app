const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const COLLECTIONS = [
  "posts",
  "musicEntries",
  "plants",
  "birds",
  "birdSightings",
];

class DBManager {
  constructor() {
    this.db = null;
    this.server = new MongoMemoryServer("6.5.1");
    this.connection = null;
  }

  // Spin up a new in-memory mongo instance
  async start() {
    const url = await this.server.getUri();
    this.connection = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db = this.connection.db(await this.server.getDbName());
  }

  // Close the connection and halt the mongo instance
  stop() {
    this.connection.close();
    return this.server.stop();
  }

  // Remove all documents from the entire database - useful between tests
  cleanup() {
    return Promise.all(
      COLLECTIONS.map((c) => this.db.collection(c).deleteMany({}))
    );
  }
}

module.exports = DBManager;
