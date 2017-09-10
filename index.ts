export type LazyPromise<A> = () => Promise<A>

export function seq<A>(...promises: LazyPromise<A>[]): Promise<A[]> {
  return new Promise(function (resolve, reject) {

    const go = function (promises: LazyPromise<A>[], acc: A[]) {
      if (promises[0]) {
        promises[0]().then(
          res => go(promises.slice(1), acc.concat([res])),
          reject
        )
      } else {
        resolve(acc)
      }
    }

    go(promises, [])

  })
}