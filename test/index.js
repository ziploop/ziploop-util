var should = require('chai').should(),
    zlutil = require('../index'),
    throttleForEach = zlutil.throttleForEach,
    validParams = zlutil.validParams;

// describe('#throttleForEach', function() {
//   it('', function() {
//     throttleForEach().should.equal();
//   });
// });

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
  it('should return true if all parameters are present', function() {
  	var params = ['one', 'two', 'three'];
    validParams(testObj, params).should.equal(true);
  });
});