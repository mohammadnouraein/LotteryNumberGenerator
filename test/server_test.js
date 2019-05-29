var expect = require("chai").expect;
var assert = require("chai").assert;
var client = require("../dist/client/client").default;

describe("Random Generator Client", function() {

  before(async function(){
    this.timeout(10000);
     clientApp = new client();
     res=await clientApp.getNewRandomNumberFromServer();
  });

  it("The result must be a non empty array",function(){
    expect(res && Array.isArray(res) && res.length).to.be.ok;
  })

  it("Server must return exactly 6 item", function() {
      expect(res.length).to.equal(6);
  });

  it("All 6 random numbers must be between 0 and 100", function() {
      expect(
        res &&
          res.length &&
          res.map(i =>typeof(i)=='number' && i <= 100 && i >= 0).indexOf(false) == -1
      ).to.equal(true);
  });
  
});
