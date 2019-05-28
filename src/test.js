import assert from "assert";
import Client from "./client/client";
describe("Random Generator Client", () => {
  it("Server must return exactly 6 random numbers (1-100)", function(done) {
    this.timeout(10000);
    let client = new Client();
    client.getNewRandomNumberFromServer().then(res => {
      assert.equal(res.length, 6);
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
