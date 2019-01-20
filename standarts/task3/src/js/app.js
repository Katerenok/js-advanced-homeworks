'use strict';

var scores = [74989, 74990, 74990, 62000, 58480, 61800];

var compare = function(a, b) {
		if (a > b) return -1;
  		if (a < b) return 1;
        return 0;
	}

var top3 = scores.sort(compare).slice(0, 3);

var max = function () {
	return top3[0];
}

console.log(max())

var avg = function () {
	var sum = 0;
	top3.forEach(function(value) {
		sum += value; 
	});

	return sum / 3;
}

console.log(avg());