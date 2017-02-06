// @flow
const {observable} = require('mobx')

let a = observable({
    a: 1
})

const c = {...a}
console.log('c: ', c);

