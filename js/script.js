'use strict';

function newArr() {
	const times = 10;
	let arr = [];

	for (let i = 0; i < times; i++) {
		arr.push(Math.floor(Math.random() * i) * i + 1);
	}

	return arr;
}

function findMax(...arr) {
	let max = 0;

	arr.forEach(el => {
		if (max < el) max = el;
		return max;
	});

	return max;
}

function runFindMax() {
	const arr = newArr();
	alert(`The array is: ${arr} \n\nThe largest value is: ${findMax(...arr)}`);
}
