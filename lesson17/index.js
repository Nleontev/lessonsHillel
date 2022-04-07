"use strict";

// class Person {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getName() {
// 		return this.name;
// 	}

// 	get fullName() {
// 		return this.name + " " + this.surname;
// 	}

// 	set fullName(value) {
// 		const [name, surname] = value;
// 	}

// 	static computeAge(year) {
// 		const d = new Date();
// 		return +d.getFullYear() - year;
// 	}
// }

/** In FP style */
// function Person(name, surname) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.getName = function () {};
// }

// Person.computeAge = function (year) {
// 	const d = new Date();
// 	return +d.getFullYear() - year;
// };
/** In FP style */

// const personObject = new Person("Alex", "Test");

// console.log(Object.hasOwnProperty.call(personObject, "getName"));

/** Inheritance */

// class Car {
// 	constructor(name, model, type) {
// 		this.name = name;
// 		this.model = model;
// 		this.type = type;
// 	}

// 	start() {
// 		console.log(`${this.name} ${this.model} started drive`);
// 	}

// 	turn(direction) {
// 		console.log(`${this.name} ${this.model} turns ${direction}`);
// 	}

// 	stop() {
// 		console.log(`${this.name} ${this.model} stopped`);
// 	}

// 	static getCarAge(year) {
// 		const d = new Date();
// 		return +d.getFullYear() - year;
// 	}
// }

// class Audi extends Car {
// 	name = "audi";
// 	constructor(model, type) {
// 		super("audi", model, type);
// 	}

// 	start() {
// 		const d = new Date();
// 		console.log(`${this.name} started at ${d.getHours()}:${d.getMinutes()}`);
// 		super.start();
// 	}

// 	openWindow() {
// 		console.log(`${this.name} opens window`);
// 	}

// 	closeWindow() {
// 		console.log(`${this.name} closes window`);
// 	}
// }

// class Volvo extends Car {
// 	name = "volvo";
// 	constructor(model, type, age) {
// 		super("volvo", model, type);
// 		this.age = age;
// 	}
// }

// const audi = new Audi("Q8", "SUV");
// const volvo = new Volvo("CX-90", "SUV", Volvo.getCarAge(2015));

// audi.start();
// audi.turn("left");

// volvo.start();
// volvo.turn("right");

// console.log(audi, volvo);

// Homework

class TodoApp {
	constructor() {
		this.todoList = [];
	}
	add(item) {}
	remove(id) {}
	clear() {}
}
class TodoItem {
	constructor({ name, id, createdDate }) {
	  // ...
	}
}
class PinnedTodoItem {
	isPinned = true
}
class ExpireTodoItem {
	canExpire = true
	constructor(obj, delay) {
	 // ...
	}
}