const arg = require('yargs').argv;
const array = [0, 0, 0, 0, 0, 0];

const length = arg.length;
const value = arg.value;

array.fill(value, 0, length);

// eslint-disable-next-line eol-last
console.log(array);