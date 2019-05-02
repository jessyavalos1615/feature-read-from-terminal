const arg = require('yargs').argv;
// eslint-disable-next-line eol-last
console.log(Array(arg.length).fill(arg.value));