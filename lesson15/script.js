"use strict";

/** Function object (name, length, arguments) */

// function sum(a, b) {
// 	if (sum.length === arguments.length) {
// 		return a + b;
// 	}
// 	throw new Error(`Not enough arguments in function sum`);
// }

// const sum = (...args) => {
// 	const [a, b] = args;
// 	return a + b;
// };

// sum(1, 2, 3);

/** setTimeout, setInterval */

// setTimeout(() => {
// 	console.log("call in setTimeout 1");
// }, 2000);

// let count = 0;
// const intervalId = setInterval(() => {
// 	count++;
// 	if (count >= 10) {
// 		clearInterval(intervalId);
// 	}
// 	console.log(sum(count, 5));
// }, 1000);

// callback - ?
// interval - 1000 - ?

// callback - ?

// let timeoutId = setTimeout(function callFn() {
// 	count++;
// 	if (count >= 10) {
	// 		clearTimeout(timeoutId);
	// 	} else {
		// 		console.log(sum(count, 2));
		// 		timeoutId = setTimeout(callFn, 1000);
		// interval - 1000 -> ? + 1000
// 	}
// 	console.log(count);
// }, 1000);

/** Decorators, call/apply */

// function getPersonDescription(name, age) {
// 	return `Person name - ${name}, person age - ${age}`;
// }

// function logger(fn) {
// 	let callsCount = 0;
// 	return function () {
// 		callsCount++;
// 		console.log(
// 			`Calls count: ${callsCount}, function arguments: ${JSON.stringify(
// 				arguments,
// 			)}`,
// 		);
// 		return fn(...arguments);
// 	};
// }

// getPersonDescription = logger(getPersonDescription);

// getPersonDescription("Alex", 80);

// function summary(a, b) {
// 	return a + b;
// }

// const calculator = {
// 	callsCount: 0,
// 	pow(a, b) {
// 		this.callsCount++;
// 		const result = a ** b;
// 		console.log(result);
// 		return result;
// 	},
// };

// function cache(fn) {
// 	const cacheMap = new Map();

// 	return function () {
// 		const key = JSON.stringify(arguments);
// 		if (cacheMap.has(key)) {
// 			return cacheMap.get(key);
// 		} else {
// 			const result = fn.apply(this, arguments);
// 			cacheMap.set(key, result);
// 			return result;
// 		}
// 	};
// }

// // calculator.pow = cache(calculator.pow);

// /** fn.bind */

// const calcPow = calculator.pow.bind(calculator); // calculator.pow was not called
// calcPow(3, 4);

// Homewark

function makeString(str) {
	let result = str;

	function add(txt){
		result += ` ${txt} `;
		console.log(result)
		return add;
	};

	add.toString = function(){
		return result;
	};
	return add;
}

alert(makeString('Hello')('world')) // --> 'Hello world'
alert(makeString('Test')('super')('test')) // --> 'Test super test'

const person = {
	name: "Alex",
	dob: 2002,
	makeRequest() {
		let answer = "Request sended";
		alert(answer);
		return answer;
	}
}

function guard(fn){
	let callsCount = 0;
	const cacheMap = new Map();
	return function() {
		callsCount++;
		const currentYear = 2022;
		if(currentYear - person.dob >= 18){
			person.answer = fn();
			addElements();
			return fn;
		}else{
			person.answer = 'Permission denied';
			addElements();
		}
	}

	function addElements(){
		cacheMap.set('name', person.name);
		cacheMap.set('dob', person.dob);
		console.log(`loggered{ name: ${cacheMap.get('name')}, dob: ${cacheMap.get('dob')}, answer: ${person.answer}, calls count: ${callsCount} }`);
	}
}

person.makeRequest = guard(person.makeRequest);
const request = person.makeRequest;
request();
request();