"use strict";

// const obj = {
// 	test: "olololo",
// 	a: 1,
// 	b: 2,
// };

// Object.defineProperty(obj, "test", {
// 	writable: false,
// 	configurable: false,
// 	enumerable: false,
// });

// // obj.test = "alalal";

// for (const key in obj) {
// 	console.log(key);
// }

/** Accessors (get/set) */

// const person = {
// 	name: "Alex",
// 	age: 80,
// 	get fullData() {
// 		return `person name - ${this.name}, person age - ${this.age}`;
// 	},
// 	set fullData(value) {
// 		if (!Array.isArray(value)) {
// 			throw new Error("Value should be array");
// 		}
// 		const [name, age] = value;
// 		this.name = name;
// 		this.age = age;
// 	},
// };

// const employee = {
// 	salary: 10000,
// 	get fullEmployeeData() {
// 		return `${person.fullData}, salary - ${this.salary}`;
// 	},
// };

// person.fullData = ["Nick", 75];

/** Prototypes */

// const person = {
// };

// const employee = {
// 	work() {
// 		console.log(`${this.name} works at ${this.company}`);
// 	},
// 	getSalary() {
// 		console.log(`${this.name}'s salary - ${this.salary}$`);
// 	},
// };

// const engineer = {
// 	company: "Google",
// 	__proto__: employee,
// };

// function CreateEngineer(name, salary) {
// 	this.name = name;
// 	this.salary = salary;
// }

// CreateEngineer.prototype = engineer;

// const alexObject = new CreateEngineer("Alex", 10000);
// alexObject.work();
// alexObject.getSalary();

// const manager = {
// 	company: "Meta",
// 	__proto__: employee,
// };

// function CreateManager(name, salary, teamSize) {
// 	this.name = name;
// 	this.salary = (salary / 100) * teamSize;
// }

// CreateManager.prototype = manager;

// const nickManager = new CreateManager("Nick", 20000, 100);
// nickManager.getSalary();

// console.log(nickManager);

// Homework

let shape = {
	width: 100,
	height: 100,
	check(x,y){
		if(arguments.length != 2){
			throw new Error("Введено невереное количество аргументов");
		}
		this.width = x;
		this.height = y;
	},
};

let forSquare = {
	__proto__: shape,
	get square(){
		return this.width * this.height;
	},
	set square ([x, y]){
		return this.check(x,y);
	},
}

let forRectangle = {
	__proto__: shape,
	get square(){
		return this.width * this.height;
	},
	set square ([x, y]){
		return this.check(x,y);
	},
}

let forCircle = {
	__proto__: shape,
	get square(){
		const radius = (this.width/2)^2;
		return 2 * Math.PI * radius;
	},
	set square ([x, y]){
		return this.check(x, y);
	},
}

function Square() {};
function Rectangle() {};
function Circle() {};

Square.prototype = forSquare;
Rectangle.prototype = forRectangle;
Circle.prototype = forCircle;

const circle = new Circle();
const square = new Square();
const rectangle = new Rectangle();

circle.square = ([30,30]);
square.square = ([5, 5]);
rectangle.square = ([12, 30]);

console.log(`Площадь круга: ${circle.square}`);
console.log(`Площадь квадрата: ${square.square}`);
console.log( `Площадь прямоугольника: ${rectangle.square}`);

console.log(`Ширина круга: ${circle.width}`);
console.log(`Ширина квадрата: ${square.width}`);
console.log(`Ширина прямоугольника: ${rectangle.width}`);

