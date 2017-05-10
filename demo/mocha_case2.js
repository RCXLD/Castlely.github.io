// 1. Set Up
mocha.setup({
  ui: 'bdd',
  reporter: 'json'
});

// 2. Suites && Cases
{
  var MQCSleepTime=1000;
  var MQCSuiteTimeout=600000;
  var expect = chai.expect;
  describe('log', function() {
    this.timeout(MQCSuiteTimeout);

    before(function(done) {
      // runs after all tests in this block
      console.log("MQC:SCREENSHOT:BEFORE:"+Date.now()+":"+this.test.parent.title);
      setTimeout(done, MQCSleepTime);
    });

    after(function(done) {
      // runs after all tests in this block
      console.log("MQC:SCREENSHOT:AFTER:"+Date.now()+":"+this.test.parent.title);
      setTimeout(done, MQCSleepTime); 
    });


    beforeEach(function(done) {
      // runs before each test in this block
      console.log("MQC:SCREENSHOT:BEFOREEACH:"+Date.now()+":"+this.currentTest.parent.fullTitle()+"&&&"+this.currentTest.title);
      setTimeout(done, MQCSleepTime);
    });

    afterEach(function(done) {
      // runs before each test in this block
      console.log("MQC:SCREENSHOT:AFTEREACH:"+Date.now()+":"+this.currentTest.parent.fullTitle()+"&&&"+this.currentTest.title);
      setTimeout(done, MQCSleepTime);
    });

    it('console日志', function() {
      console.log("log");
    });

    it('error', function() {
      console.error(wrongProperty)
    });
    it('error', function() {
      console.error("copying case execution")
    });
  });

describe('log', function() {
    this.timeout(MQCSuiteTimeout);

    before(function(done) {
      // runs after all tests in this block
      console.log("MQC:SCREENSHOT:BEFORE:"+Date.now()+":"+this.test.parent.title);
      setTimeout(done, MQCSleepTime);
    });

    after(function(done) {
      // runs after all tests in this block
      console.log("MQC:SCREENSHOT:AFTER:"+Date.now()+":"+this.test.parent.title);
      setTimeout(done, MQCSleepTime); 
    });


    beforeEach(function(done) {
      // runs before each test in this block
      console.log("MQC:SCREENSHOT:BEFOREEACH:"+Date.now()+":"+this.currentTest.parent.fullTitle()+"&&&"+this.currentTest.title);
      setTimeout(done, MQCSleepTime);
    });

    afterEach(function(done) {
      // runs before each test in this block
      console.log("MQC:SCREENSHOT:AFTEREACH:"+Date.now()+":"+this.currentTest.parent.fullTitle()+"&&&"+this.currentTest.title);
      setTimeout(done, MQCSleepTime);
    });

    it('console日志', function() {
      console.log("log");
    });

    it('error', function() {
      console.error(wrongProperty)
    });
    it('error', function() {
      console.error("copying case execution")
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
