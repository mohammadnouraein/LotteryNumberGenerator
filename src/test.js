import assert from "assert";
import Client from "./client/client";
describe("Random Generator Client", () => {
  it("Server must return exactly 6 random numbers", function(done) {
    this.timeout(10000);
    let client = new Client();
    client.getNewRandomNumberFromServer().then(res => {
      assert.equal(res.length, 6);
      done();
    });
  });
  it("All 6 random numbers must be between 0 and 100", function(done) {
    this.timeout(10000);
    let client = new Client();
    client.getNewRandomNumberFromServer().then(res => {
      assert.equal(
        true,
        res &&
          res.length &&
          res.map(i => i <= 100 && i >= 0).indexOf(false) == -1
      );
      done();
    });
  });
});
