const seq = require('./')

exports['it should run tests in sequence, and resolve to the an array of all the member promises\' resolutions'] = function (test) {

	test.expect(1)

	seq([
		function(){ return new Promise(function (resolve, reject) { resolve(1) }) },
		function(){ return new Promise(function (resolve, reject) { resolve(2) }) },
		function(){ return new Promise(function (resolve, reject) { resolve(3) }) },
		function(){ return new Promise(function (resolve, reject) { resolve(4) }) },
		function(){ return new Promise(function (resolve, reject) { resolve(5) }) }
	])
	.then(function (res) {
		test.deepEqual(res, [1,2,3,4,5])
		test.done()
	}, function (err) {
		console.error(err)
		test.equal(err, undefined)
		test.done()
	})

}

exports['it should reject with the first rejection'] = function (test) {

	test.expect(1)

	const error = new TypeError('foo')

	seq([
		function(){ return new Promise(function (resolve, reject) { resolve(1) }) },
		function(){ return new Promise(function (resolve, reject) { resolve(2) }) },
		function(){ return new Promise(function (resolve, reject) { resolve(3) }) },
		function(){ return new Promise(function (resolve, reject) { reject(error) }) },
		function(){ return new Promise(function (resolve, reject) { resolve(5) }) }
	])
	.then(function (res) {
		console.error(res)
		test.deepEqual(res, undefined)
		test.done()
	}, function (err) {
		test.equal(err, error)
		test.done()
	})

}