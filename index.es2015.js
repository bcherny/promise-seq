export default function seq(promises) {
    return new Promise(function (resolve, reject) {
        const go = function (promises, acc) {
            if (promises[0]) {
                promises[0]().then(res => go(promises.slice(1), acc.concat([res])), reject);
            }
            else {
                resolve(acc);
            }
        };
        go(promises, []);
    });
}
