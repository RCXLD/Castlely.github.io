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
    
    /* 有了after函数就必须等了！！！！！！*/
    after(function(done) {
      // runs after all tests in this block
      console.log("MQC:SCREENSHOT:AFTER:"+Date.now()+":"+this.test.parent.title);
      setTimeout(done, MQCSleepTime); 
    });

    /*
    beforeEach(function(done) {
      // runs before each test in this block
      console.log("MQC:SCREENSHOT:BEFOREEACH:"+Date.now()+":"+this.currentTest.parent.fullTitle()+"&&&"+this.currentTest.title);
      setTimeout(done, MQCSleepTime);
    });*/

    /*
    afterEach(function(done) {
      // runs before each test in this block
      console.log("MQC:SCREENSHOT:AFTEREACH:"+Date.now()+":"+this.currentTest.parent.fullTitle()+"&&&"+this.currentTest.title);
      setTimeout(done, 0);
      console.log(arguments,this);
      // done();
    });*/

    it('redirect',function(){
      document.querySelector('#redirect').click();
      setTimeout("console.log('11222')", 0);
    });
  
    it('console日志', function() {
      console.log("log");
      var b=0;
      setTimeout("console.log('11222')", 10000);
    });

    it('error', function() {
      
      setTimeout("console.log('11222')", 10000);
      console.error(wrongProperty)
    });

    it('上滑', function() {

      setTimeout("console.log('11222')", 10000);
      console.log('MQC:ACTION:SWIPEDOWN:'+Date.now()+':2'+this.test.parent.title);
    });


/*
    it('error', function() {
      console.error(wrongProperty)
    });

    it('上滑', function() {
      console.log('MQC:ACTION:SWIPEDOWN:'+Date.now()+':2'+this.test.parent.title);
    });

    it('下滑', function() {
      console.error(wrongProperty)
    });

    it('左滑', function() {
      console.error(wrongProperty)
    });

    it('右滑', function() {
      console.error(wrongProperty)
    });

    it('随机点击', function() {
      console.error(wrongProperty)
    });*/
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
/*mocha.run()
    .on('test', function(test) {
        console.log('Test started: '+test.title);
    })
    .on('test end', function(test) {
        console.log('Test done: '+test.title);
        console.log("MMMMM");
        mocha.reporter.done(test);
        console.log("MMMMM");
    })
    .on('pass', function(test) {
        console.log('Test passed');
        console.log(test);
    })
    .on('fail', function(test, err) {
        console.log('Test fail');
        console.log(test);
        console.log(err);
    })
    .on('end', function() {
        console.log('All done');
    });*/