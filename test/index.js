var should = require('chai').should(),
    zlutil = require('../index'),
    throttleForEach = zlutil.throttleForEach,
    validParams = zlutil.validParams;

describe('#throttleForEach', function() {
	this.timeout(5000);
	var array = ['a', 'b', 'c'];
  it('should wait ~1 second before returning the next item in the array', function(done) {
  	var times = [];
    throttleForEach(array, 1000, function(item, i){
			times.push(Date.now());
			if (i === 2) {
				(times[1] - times[0]).should.be.above(999).and.below(1003);
				done();
			}
		});
  });
});

describe('#validParams', function() {
	var testObj = {
		one: 1,
		two: "two",
		three: ['a', 'b', 'c']
	};
  it('should return false if missing parameters', function() {
  	var params = ['one', 'two', 'three', 'foo']
    validParams(testObj, params).should.equal(false);
  });
  it('should return object with all properties if strict mode is false', function() {
  	var params = ['one', 'two'];
    var result = validParams(testObj, params, false);
    console.log(result);
    result.should.have.property('one');
    result.should.have.property('two');
    result.should.have.property('three');
  });
  it('should return object with only the specified properties if strict mode is true', function() {
  	var params = ['one', 'two'];
    var result = validParams(testObj, params, true);
    console.log(result);
    result.should.have.property('one');
    result.should.have.property('two');
    result.should.not.have.property('three');
  });
});