import test from 'ava'
import { seq } from './'

test(`it should run tests in sequence, and resolve to the an array
      of all the member promises' resolutions`, t => {

    return seq(
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3),
      () => Promise.resolve(4),
      () => Promise.resolve(5)
    )
      .then(
      res => t.deepEqual(res, [1, 2, 3, 4, 5]),
      err => t.is(err, undefined)
      )

  })

test('it should preserve array nesting', t => {
  return seq(
    () => seq(() => Promise.resolve(1), () => Promise.resolve(2)),
    () => seq(() => Promise.resolve(3), () => Promise.resolve(4)),
    () => Promise.all([Promise.resolve(5), Promise.resolve(6)])
  )
    .then(
    res => t.deepEqual(res, [[1, 2], [3, 4], [5, 6]]),
    err => t.is(err, undefined)
    )
})

test('it should reject with the first rejection', t => {

  const error = new TypeError('foo')

  return seq(
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3),
    () => Promise.reject(error),
    () => Promise.resolve(5)
  )
    .then(
      res => t.deepEqual(res, undefined),
      err => t.is(err, error)
    )

})
