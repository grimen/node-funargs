var inspect = require('eyes').inspector({stream: null, pretty: false, styles: false});

// -----------------------
//  Module
// --------------------

var Fun = {};

// -----------------------
//  Class: Arguments
// --------------------

function FunArguments (args) {
  var _args = Array.prototype.slice.apply(args);
  _args.__proto__ = FunArguments.prototype;
  return _args;
}

FunArguments.type = function(type) {
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

FunArguments.prototype = {
  __proto__: Array.prototype,
  strings: FunArguments.type('string'),
  numbers: FunArguments.type('number'),
  arrays: FunArguments.type('array'),
  objects: FunArguments.type('object'),
  functions: FunArguments.type('function'),
  inspect: function() {
    return inspect(this);
  },
  debug: function() {
    console.log(this.inspect());
  }
};

FunArguments.prototype.inspect = function() {
  return inspect(this);
};

FunArguments.prototype.debug = function() {
  console.log(this.inspect());
};

// -----------------------
//  Expose
// --------------------

Fun.args = function(arguments) {
  return new FunArguments(arguments);
};

// -----------------------
//  Export
// --------------------

module.exports = Fun.args;
