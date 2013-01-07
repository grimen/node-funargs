var inspect = require('eyes').inspector({stream: null, pretty: false, styles: false});

// -----------------------
//  Module
// --------------------

var Fun = {};

// -----------------------
//  Class: Arguments
// --------------------

Fun.Arguments = function Arguments() {};
Fun.Arguments.prototype = Array.prototype;

Fun.Arguments.type = function(type) {
  return function() {
    var matching_args = [], matching_type, arg;

    for (var i = 0; i < this.length; i++) {
      arg = this[i];

      if (Array.isArray(arg))
        matching_type = (type === 'array');
      else
        matching_type = (arg && typeof arg === type);

      if (matching_type) {
        matching_args.push(arg);
      }
    }

    return matching_args;
  };
};

Fun.Arguments.prototype.strings = Fun.Arguments.type('string');
Fun.Arguments.prototype.numbers = Fun.Arguments.type('number');
Fun.Arguments.prototype.arrays = Fun.Arguments.type('array');
Fun.Arguments.prototype.objects = Fun.Arguments.type('object');
Fun.Arguments.prototype.functions = Fun.Arguments.type('function');

Fun.Arguments.prototype.inspect = function() {
  return inspect(this);
};

Fun.Arguments.prototype.debug = function() {
  console.log(this.inspect());
};

// -----------------------
//  Expose
// --------------------

Fun.args = function(arguments) {
  return Fun.Arguments.prototype.slice.call(arguments);
};

// -----------------------
//  Export
// --------------------

module.exports = Fun.args;
