var expect = require("chai").expect;
var client = require("../dist/client/client").default;

/**
 * Random Generator Client
 */
describe("Random Generator Client", () => {
  /**
   * Server must return exactly 6 random numbers
   */
  it("Server must return exactly 6 random numbers", function(done) {
    this.timeout(10000);
    let clientApp = new client();
    clientApp.getNewRandomNumberFromServer().then(res => {
      expect(res.length).to.equal(6);
      done();
    });
  });

  /**
   * All 6 random numbers must be between 0 and 100
   */
  it("All 6 random numbers must be between 0 and 100", function(done) {
    this.timeout(10000);
    let clientApp = new client();
    clientApp.getNewRandomNumberFromServer().then(res => {
      expect(
        res &&
          res.length &&
          res.map(i => i <= 100 && i >= 0).indexOf(false) == -1
      ).to.equal(true);
      done();
    });
  });
});
