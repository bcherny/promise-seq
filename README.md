# promise-seq

[![Build Status][build]](https://circleci.com/gh/bcherny/promise-seq) [![npm]](https://www.npmjs.com/package/promise-seq) [![cc0]](http://creativecommons.org/about/cc0)

[build]: https://img.shields.io/circleci/project/bcherny/promise-seq.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/promise-seq.svg?style=flat-square
[cc0]: https://img.shields.io/npm/l/promise-seq.svg?style=flat-square

lazy-execute promises in sequence

## install

```sh
npm i -s promise-seq
```

## usage

```sh
import seq from 'promise-seq'

seq([
	(() => new Promise( ... )),
	(() => new Promise( ... )),
	(() => new Promise( ... ))
])
.then(res => {
	...
}, err => ...)
```

## test

```sh
npm test
```