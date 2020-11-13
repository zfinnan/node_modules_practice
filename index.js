const {favFoods} = require("./myModule");
var colors = require('colors');
var toCamelCase = require('to-camel-case')
var pr = require('my-prime');

// myModule.js
favFoods();


// colors
console.log('hello'.green);
console.log('OMG Rainbows!'.rainbow);
console.log('Run the trap'.trap);

// toCamelCase

console.log(toCamelCase('this is an example'));

// My-Prime

console.log(pr.isPrime(37));
console.log(pr.isPrime(794));
console.log(pr.isPrime(1021));