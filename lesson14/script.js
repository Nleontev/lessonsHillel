// "use strict";
// // Recursion
// function pow(x, n) {
// 	if (n === 1) {
// 		return x;
// 	}
// 	return x * pow(x, n - 1);
// }
// pow(2, 3);

// // 1. Функция вызывается
// // 2. Приостанавливается
// // 3. В стек вызовов добавляется еще один вызов функции
// // 4. Стек выполняется
// // 5. Возвращает результат

// // 2 * pow(2, 3) -> 2 * pow(2, 2) -> 2 * pow(2, 1) -> pow(2, 1) = 2

// // Xn = X * Xn-1

// const reverse = (str) => {
// 	const arr = [];
// 	let resultString = "";
// 	for (let index = 0; index < str.length; index++) {
// 		const chart = str[index];
// 		arr.push(chart);
// 	}
// 	// s -> t -> r -> ... -> g
// 	while (arr.length) {
// 		const el = arr.pop(); // g <- ... <- .. <- s
// 		resultString += el;
// 	}
// 	return resultString;
// };

// reverse("string");

// const getChartCountFromString = (str, chart) => {
// 	// WITH LOOP
// 	// let counter = 0;
// 	// if (str.length === 0) {
// 	// 	return counter;
// 	// }
// 	// for (let index = 0; index < str.length; index++) {
// 	// 	const element = str[index];
// 	// 	if (element === chart) {
// 	// 		counter++;
// 	// 	}
// 	// }
// 	// return counter;
// 	// WITH RECURSION
// 	// const firstChart = str.slice(0, 1);
// 	// if (firstChart === chart) {
// 	// 	return 1 + getChartCountFromString(str.slice(1), chart);
// 	// } else {
// 	// 	return getChartCountFromString(str.slice(1), chart);
// 	// }
// };

// getChartCountFromString("hello", "l");

// const deepClone = (obj) => {
// 	let resultObject = {};
// 	for (const key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			const element = obj[key];
// 			if (typeof element === "object" && element !== null) {
// 				resultObject[key] = deepClone(element);
// 			} else {
// 				resultObject[key] = element;
// 			}
// 		}
// 	}
// 	return resultObject;
// };

// const obj = {
// 	a: 1,
// 	b: 2,
// 	c: {
// 		d: 3,
// 		e: {
// 			f: {
// 				g: 4,
// 			},
// 		},
// 	},
// 	m: null,
// };
// const clonedObj = deepClone(obj);

// const linkedList = {
// 	value: {
// 		name: "Alex",
// 		age: 20,
// 	},
// 	next: {
// 		value: {
// 			name: "Lion",
// 			age: 18,
// 		},
// 		next: {
// 			value: {
// 				name: "Peter",
// 				age: 45,
// 			},
// 			next: null,
// 		},
// 	},
// };

// const findElInLinkedList = (list, name) => {
// 	if (!list) {
// 		return null;
// 	}

// 	if (list.value.name === name) {
// 		return list.value;
// 	}
// 	return findElInLinkedList(list.next, name);
// };

// // CLOSURE
// let name = "Alex"; // OUTER ER name = "Alex"

// function getName() {
// 	let age = 23; // INNER ER age = 23
// 	return name;
// }

// name = "Peter"; // OUTER ER name = "Peter"

// // Create lexical env
// // 1. Env record
// // 2. Link on outer lexical env

// function createCounter() {
// 	let counter = 0;
// 	return function () {
// 		counter++;
// 		return counter;
// 	};
// }

// const counter = createCounter();
// let count = counter();
// count = counter();
// count = counter();
// count = counter();

// function Calculator() {
// 	let countSumCalls = 0;

// 	this.summary = function (a, b) {
// 		countSumCalls++;
// 		return a + b;
// 	};

// 	this.getSummaryCalls = function () {
// 		return countSumCalls;
// 	};
// }

// const calculator = new Calculator();
// calculator.summary(2, 2);
// calculator.summary(2, 2);
// console.log(calculator.getSummaryCalls(), "getSummaryCalls");

function getSum(arr) {
	let result = 0;
	arr.forEach(el => {
		if(Number.isInteger(el)){
			result += el
		}else if(Array.isArray(el)){
			result += getSum(el)
		}
	});
	return result;
}	
	console.log(getSum([1, 2, 3])); // 6
	console.log(getSum([1, [2, [3,1],1,1,1],1,1]));

	function contains(obj, val) {
		let flag = false;
		for (const key in obj) {
			const element = obj[key];	
			if (typeof element === "object" && element !== null) {
				flag = contains(element, val);
			} else if(element === val){
				return true;
			}
		}
		return flag;
	}

const obj = {
	a: {
		b: {
			c: {
				d: 'test',
				e: {
					f: 5,
					},
				},
			h: 'alala',
			},
		},
}
		console.log(contains(obj, 5)); // true
		console.log(contains(obj, 'ololo')); // false
		console.log(contains(obj, 'alala'));

	function createStack() {
		let stack = [];
		this.add = function(el){
			stack.unshift(el);
		};
		this.remove = function(){
			stack.shift();
		};
		this.get = function(){
			return stack;
		}
	};
	
	const stack = new createStack();
	stack.add(5);
	stack.add('smthing');
	stack.add("test");
	stack.remove();
	console.log(stack.get()) // [5]