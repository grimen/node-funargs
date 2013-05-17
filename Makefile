test:
	./node_modules/.bin/mocha ./test/index.js

example:
	node ./examples/simple.js

.PHONY: test