function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}

// 1. Set Up
mocha.setup({
  ui: 'bdd',
  reporter: 'json'
});

// 2. Suites && Cases
{
  var MQCSleepTime=5000;
  var expect = chai.expect;
  describe('log', function() {
    this.timeout(60000);

    before(function(done) {
      // runs after all tests in this block
      console.log("MQCSignal:ScreenShotSuite Before");
      setTimeout(done, MQCSleepTime);
    });

    after(function(done) {
      // runs after all tests in this block
      console.log("MQCSignal:ScreenShotSuite After");
      console.log("@MQC@:FINISHED"); 
      setTimeout(done, MQCSleepTime);
    });


    beforeEach(function(done) {
      // runs before each test in this block
      console.log("MQCSignal:ScreenShot Each");
      setTimeout(done, MQCSleepTime);
    });

    it('console日志', function() {
      console.log("log");
    });

    it('error', function() {
      console.error(wrongProperty)
    });

    it('redirect',function(){
      //document.querySelector('#redirect').click();
    })
  });

  /*
  describe('search mqc', function() {
    before(function(done) {
      // runs after all tests in this block
      console.log("MQCSignal:ScreenShotSuiteBefore");
      setTimeout(done, 5000);
    });

    beforeEach(function(done) {
      // runs before each test in this block
      console.log("MQCSignal:ScreenShot");
      setTimeout(done, 5000);
    });

    after(function(done) {
      // runs after all tests in this block
      console.log("MQCSignal:ScreenShotSuiteAfter");
      console.log("@MQC@:FINISHED"); 
      setTimeout(done, 5000);
    });

    it('enter mqc', function() {
      document.querySelector("#index-kw").value="mqc"
      expect(document.querySelector("#index-kw").value).to.be.equal("mqc");
    });

    it('error', function() {
      document.querySelector("#index-bn").click();
    });
  });*/

}


// 3. Run
mocha.run();
