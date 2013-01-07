var helper = require('./helper'),
    assert = helper.assert;

var funargs = require('..');
var args;

module.exports = {

  'Helpers': {
    before: function() {
      args = funargs(arguments);
    },

    '#strings': {
      '()': function() {
        assert.property ( args, 'strings' );
        assert.typeOf ( args.strings, 'function' );
      }
    },

    '#numbers': {
      '()': function() {
        assert.property ( args, 'numbers' );
        assert.typeOf ( args.numbers, 'function' );
      }
    },

    '#arrays': {
      '()': function() {
        assert.property ( args, 'arrays' );
        assert.typeOf ( args.arrays, 'function' );
      }
    },

    '#objects': {
      '()': function() {
        assert.property ( args, 'objects' );
        assert.typeOf ( args.objects, 'function' );
      }
    },

    '#functions': {
      '()': function() {
        assert.property ( args, 'functions' );
        assert.typeOf ( args.functions, 'function' );
      }
    },

    '#functions': {
      '()': function() {
        assert.property ( args, 'functions' );
        assert.typeOf ( args.functions, 'function' );
      }
    },

    '#inspect': {
      '()': function() {
        assert.property ( args, 'inspect' );
        assert.typeOf ( args.inspect, 'function' );
      }
    },

    '#debug': {
      '()': function() {
        assert.property ( args, 'debug' );
        assert.typeOf ( args.debug, 'function' );
      }
    }
  },

  'No argument(s)': {
    'function() arguments should be and Array: []': function() {
      var f = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );
        assert.deepEqual ( args, [] );
      }
    }
  },

  'One argument': {
    'function(undefined) arguments should be an Array: [undefined]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [undefined] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ undefined ]" );
      }

      fun (undefined);
    },

    'function(null) arguments should be an Array: [null]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [null] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ null ]" );
      }

      fun (null);
    },

    'function("fun") arguments should be an Array: ["fun"]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, ["fun"] );

        assert.deepEqual ( args.strings(), ["fun"] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ 'fun' ]" );
      }

      fun ("fun");
    },

    'function(1337) arguments should be an Array: [1337]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [1337] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [1337] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ 1337 ]" );
      }

      fun (1337);
    },

    'function({fun: "args"}) arguments should be an Array: [{fun: "args"}]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [{fun: "args"}] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [{fun: "args"}] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ { fun: 'args' } ]" );
      }

      fun({fun: "args"});
    },

    'function(["fun"]) arguments should be an Array: ["fun"]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [["fun"]] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [["fun"]] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ [ 'fun' ] ]" );
      }

      fun(["fun"]);
    },

    'function(function a() {}) arguments should be an Array: [function a() {}]': function() {
      var a = function() { return "a"; };

      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [a] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [a] );

        assert.deepEqual ( args.inspect(), "[ [Function] ]" );
      }

      fun (a);
    }
  },

  'Multiple arguments - of same kind': {
    'function(undefined, undefined) arguments should be an Array: [undefined, undefined]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [undefined, undefined] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ undefined, undefined ]" );
      }

      fun (undefined, undefined);
    },

    'function(null, null) arguments should be an Array: [null, null]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [null, null] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ null, null ]" );
      }

      fun (null, null);
    },

    'function("fun", "args") arguments should be an Array: ["fun", "args"]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, ["fun", "args"] );

        assert.deepEqual ( args.strings(), ["fun", "args"] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ 'fun', 'args' ]" );
      }

      fun ("fun", "args");
    },

    'function(13, 37) arguments should be an Array: [13, 37]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [13, 37] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [13, 37] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ 13, 37 ]" );
      }

      fun (13, 37);
    },

    'function({fun: "args"}, {args: "fun"}) arguments should be an Array: [{fun: "args"}, {args: "fun"}]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [{fun: "args"}, {args: "fun"}] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [{fun: "args"}, {args: "fun"}] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ { fun: 'args' }, { args: 'fun' } ]" );
      }

      fun ({fun: "args"}, {args: "fun"});
    },

    'function(["fun", "args"], ["args", "fun"]) arguments should be an Array: [["fun", "args"], ["args", "fun"]]': function() {
      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [["fun", "args"], ["args", "fun"]] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [["fun", "args"], ["args", "fun"]] );

        assert.deepEqual ( args.functions(), [] );

        assert.deepEqual ( args.inspect(), "[ [ 'fun', 'args' ], [ 'args', 'fun' ] ]" );
      }

      fun (["fun", "args"], ["args", "fun"]);
    },

    'function(function a() {}, function b() {}) arguments should be an Array: [function a() {}, function b() {}]': function() {
      var a = function() { return "a"; },
          b = function() { return "b"; };

      var fun = function() {
        var args = funargs(arguments);

        assert.typeOf ( args, 'array' );

        assert.deepEqual ( args, [a, b] );

        assert.deepEqual ( args.strings(), [] );

        assert.deepEqual ( args.numbers(), [] );

        assert.deepEqual ( args.objects(), [] );

        assert.deepEqual ( args.arrays(), [] );

        assert.deepEqual ( args.functions(), [a, b] );

        assert.deepEqual ( args.inspect(), "[ [Function], [Function] ]" );
      }

      fun (a, b);
    }
  }

};
