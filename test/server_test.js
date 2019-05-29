var expect = require("chai").expect;
var assert = require("chai").assert;
var client = require("../dist/client/client").default;

/**
 * Random Generator Client
 */
describe("Random Generator Client", function() {
  before(async function(){
    this.timeout(10000);
     clientApp = new client();
     res=await clientApp.getNewRandomNumberFromServer();
  });

  /**
   * The result must be an array
   */
  it("The result must be anon empty array",function(){
    expect(res && Array.isArray(res)).to.equal(true);
  })

  /**
   * Server must return exactly 6 random numbers
   */
  it("Server must return exactly 6 random numbers", function() {
      expect(res.length).to.equal(6);
  });

  /**
   * All 6 random numbers must be between 0 and 100
   */
  it("All 6 random numbers must be between 0 and 100", function() {
      expect(
        res &&
          res.length &&
          res.map(i => i <= 100 && i >= 0).indexOf(false) == -1
      ).to.equal(true);
  });
  
});
