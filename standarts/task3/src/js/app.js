'use strict';

let scores = [74989, 74990, 74990, 62000, 58480, 61800];

var max = function () {
	let maxVal = 0;
	scores.forEach(function(value) {
		if (value > maxVal) 
			maxVal = value;
	});

	return maxVal;
}

console.log(max())

var avg = function () {
	let compare = function(a, b) {
		if (a > b) return -1;
  		if (a < b) return 1;
        return 0;
	}

	let top3 = scores.sort(compare).slice(0, 3);
	let sum = 0;
	top3.forEach(function(value) {
		sum += value; 
	});

	return sum / 3;
}

console.log(avg());