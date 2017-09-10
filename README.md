# promise-seq

[![Build Status][build]](https://circleci.com/gh/bcherny/promise-seq) [![npm]](https://www.npmjs.com/package/promise-seq) [![cc4]](https://creativecommons.org/licenses/by/4.0/)

[build]: https://img.shields.io/circleci/project/bcherny/promise-seq.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/promise-seq.svg?style=flat-square
[cc4]: https://img.shields.io/npm/l/promise-seq.svg?style=flat-square

> evaluate promises in sequence

## install

```sh
# Using Yarn:
yarn add promise-seq

# Or, using NPM:
npm install promise-seq --save
```

## usage

```js
import { seq } from 'promise-seq'

seq(
  () => new Promise( ... ),
  () => new Promise( ... ),
  () => new Promise( ... )
)
.then(
  res => ...,
  err => ...
)
```

## test

```sh
npm test
```

## tdd

```sh
npm test -- --watch
```