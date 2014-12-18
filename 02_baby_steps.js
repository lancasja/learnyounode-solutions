/* 2. BABY STEPS */

// This is an array
// All values are strings
var input = process.argv;
var sum = 0;
//* var arguments = [];

for ( var i = 2; i < input.length; i++ ) {
	sum += parseInt(input[i]);
	
	//* arguments.push(input[i]);
}

console.log(sum);
//* console.log(arguments);