/*
*		learnyounode
*/

/* 1. HELLO WORLD */
// console.log("HELLO WORLD");

/* 2. BABY STEPS */

// This is an array
var input = process.argv;

console.log("number of arguments: " + (input.length - 2));

for ( var i = 2; i < input.length; i++ ) {

	console.log("value " + (i - 1) + ": " + input[i]);

}