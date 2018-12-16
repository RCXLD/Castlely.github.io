mocha.setup({
	ui: 'bdd',
	reporter: 'json'
}); {
	var MQCSleepTime = 3000;
	var MQCSuiteTimeout = 600000;
	var expect = chai.expect;
	describe('http://h5.m.gamedog.cn/games/1950771.html', function() {
		this.timeout(MQCSuiteTimeout);
		before(function(done) {
			console.log('MQC:SCREENSHOT:BEFORE:' + Date.now() + ':' + this.test.parent.title);
			setTimeout(done, MQCSleepTime);
		});
		after(function() {
			console.log('MQC:SCREENSHOT:AFTER:' + Date.now() + ':' + this.test.parent.title);
		});
		beforeEach(function(done) {
			console.log('MQC:SCREENSHOT:BEFOREEACH:' + Date.now() + ':' + this.currentTest.parent.fullTitle() + '&&&' + this.currentTest.title);
			setTimeout(done, MQCSleepTime);
		});
		afterEach(function() {
			console.log('MQC:SCREENSHOT:AFTEREACH:' + Date.now() + ':' + this.currentTest.parent.fullTitle() + '&&&' + this.currentTest.title);
		});
		it('点击.star 1次', function() {
			console.log('开始点击.star 1次');
			document.querySelector('.star').click();
		});
	});
}
mocha.run();