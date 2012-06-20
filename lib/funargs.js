
var Fun = {

  args: function(arguments) {
    var args = Fun.Arguments.prototype.slice.call(arguments);
    return args;
  }

};

Fun.Arguments = function Arguments() {};
Fun.Arguments.prototype = Array.prototype;

Fun.Arguments.by_type = function(type) {
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

Fun.Arguments.prototype.strings = Fun.Arguments.by_type('string');
Fun.Arguments.prototype.numbers = Fun.Arguments.by_type('number');
Fun.Arguments.prototype.arrays = Fun.Arguments.by_type('array');
Fun.Arguments.prototype.objects = Fun.Arguments.by_type('object');
Fun.Arguments.prototype.functions = Fun.Arguments.by_type('function');

module.exports = Fun.args;