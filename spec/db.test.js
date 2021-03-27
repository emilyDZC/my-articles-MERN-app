const DBManager = require("./DBManager");

const GROUP = { _id: "g1", createdAt: new Date() };

describe("Group.getGroupById", () => {
  const dbman = new DBManager();

  after(() => dbman.stop());
  before(() => dbman.start());
  afterEach(() => dbman.cleanup());
  beforeEach(() => dbman.models.Group.collection.insertOne(GROUP));

  it("should return null with an invalid id", async () => {
    expect.assertions(1);
    const result = await dbman.models.Group.getGroupById("x");
    expect(result).toBeNull();
  });

  it("should return a group with a valid id", async () => {
    expect.assertions(1);
    const result = await dbman.models.Group.getGroupById(GROUP._id);
    expect(result).toEqual(GROUP);
  });
});
