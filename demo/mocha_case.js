// 1. Set Up
mocha.setup({
  ui: 'bdd',
  reporter: 'json'
});

// 2. Suites && Cases
{
  var MQCSleepTime=2000;
  var MQCSuiteTimeout=60000;
  var expect = chai.expect;
  describe('log', function() {
    this.timeout(MQCSuiteTimeout);

    before(function(done) {
      // runs after all tests in this block
      console.log("MQC:SCREENSHOT:Before");
      setTimeout(done, MQCSleepTime);
    });

    after(function(done) {
      // runs after all tests in this block
      console.log("MQC:SCREENSHOT:After");
      setTimeout(done, MQCSleepTime); 
    });


    beforeEach(function(done) {
      // runs before each test in this block
      console.log("MQC:SCREENSHOT:Each");
      setTimeout(done, MQCSleepTime);
    });

    it('console日志', function() {
      console.log("log");
    });

    it('error', function() {
      console.error(wrongProperty)
    });
  });

  /*
  describe('search mqc', function() {
    this.timeout(MQCSuiteTimeout);
    before(function(done) {
      // runs after all tests in this block
      console.log("MQCSignal:ScreenShotSuiteBefore");
      setTimeout(done, MQCSleepTime);
    });

    beforeEach(function(done) {
      // runs before each test in this block
      console.log("MQCSignal:ScreenShot");
      setTimeout(done, MQCSleepTime);
    });

    after(function(done) {
      // runs after all tests in this block
      console.log("MQCSignal:ScreenShotSuiteAfter");
      console.log("@MQC@:FINISHED"); 
      setTimeout(done, MQCSleepTime);
    });

    it('redirect',function(){
      document.querySelector('#redirect').click();
    });

  });*/

}


// 3. Run
mocha.run();
