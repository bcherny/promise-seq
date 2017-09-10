"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const _1 = require("./");
ava_1.default(`it should run tests in sequence, and resolve to the an array
      of all the member promises' resolutions`, t => {
    return _1.seq(() => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3), () => Promise.resolve(4), () => Promise.resolve(5))
        .then(res => t.deepEqual(res, [1, 2, 3, 4, 5]), err => t.is(err, undefined));
});
ava_1.default('it should preserve array nesting', t => {
    return _1.seq(() => _1.seq(() => Promise.resolve(1), () => Promise.resolve(2)), () => _1.seq(() => Promise.resolve(3), () => Promise.resolve(4)), () => Promise.all([Promise.resolve(5), Promise.resolve(6)]))
        .then(res => t.deepEqual(res, [[1, 2], [3, 4], [5, 6]]), err => t.is(err, undefined));
});
ava_1.default('it should reject with the first rejection', t => {
    const error = new TypeError('foo');
    return _1.seq(() => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3), () => Promise.reject(error), () => Promise.resolve(5))
        .then(res => t.deepEqual(res, undefined), err => t.is(err, error));
});
//# sourceMappingURL=test.js.map