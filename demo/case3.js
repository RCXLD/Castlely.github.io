mocha.setup({
	ui: 'bdd',
	reporter: 'json'
}); {
	var MQCSleepTime = 1000;
	var MQCSuiteTimeout = 600000;
	var expect = chai.expect;
	describe('http://3g.163.com/touch/', function() {
		this.timeout(MQCSuiteTimeout);
		before(function(done) {
			console.log('MQC:SCREENSHOT:BEFORE:' + Date.now() + ':' + this.test.parent.title);
			setTimeout(done, MQCSleepTime);
		});
		after(function(done) {
			console.log('MQC:SCREENSHOT:AFTER:' + Date.now() + ':' + this.test.parent.title);
			setTimeout(done, MQCSleepTime);
		});
		beforeEach(function(done) {
			console.log('MQC:SCREENSHOT:BEFOREEACH:' + Date.now() + ':' + this.currentTest.parent.fullTitle() + '&&&' + this.currentTest.title);
			setTimeout(done, MQCSleepTime);
		});
		afterEach(function(done) {
			console.log('MQC:SCREENSHOT:AFTEREACH:' + Date.now() + ':' + this.currentTest.parent.fullTitle() + '&&&' + this.currentTest.title);
			setTimeout(done, MQCSleepTime);
		});
		it('上滑1次', function() {
			console.log('开始上滑1次');
			console.log('MQC:ACTION:SWIPEUP:1:' + Date.now() + ':' + this.test.parent.title);
		});
		it('下滑1次', function() {
			console.log('开始下滑1次');
			console.log('MQC:ACTION:SWIPEDOWN:1:' + Date.now() + ':' + this.test.parent.title);
		});
	});
}
mocha.run();