// (promises: Array[Promise[Any]]) => Promise[Array[Any]]
module.exports = function seq (promises) {
  return new Promise(function (resolve, reject) {

    var go = function (promises, acc) {
      if (promises[0]) {
        promises[0]().then(function (res) {
          go(promises.slice(1), acc.concat(res))
        }, reject)
      } else {
        resolve(acc)
      }
    }

    go(promises, [])

  })
}