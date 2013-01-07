process.env.NODE_ENV = 'test';

var chai = require('chai');

chai.Assertion.includeStack = true;

module.exports = {
  assert: chai.assert
};
