const generateRandomColor = () => {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// const wrapperEl = document.querySelector(".wrapper");
// const containerEl = document.querySelector(".container");
// const boxEl = document.querySelector(".box");

// let boxFreezed = false;

// wrapperEl.addEventListener("click", function (e) {
// 	this.style.backgroundColor = generateRandomColor();
// });

// containerEl.addEventListener("click", function (e) {
// 	this.style.backgroundColor = generateRandomColor();
// });

// boxEl.addEventListener("click", function (e) {
// 	this.style.backgroundColor = generateRandomColor();
// });

// boxEl.addEventListener(
// 	"click",
// 	function (e) {
// 		if (boxFreezed) {
// 			e.stopPropagation();
// 		} else {
// 			boxFreezed = true;
// 			let timer = setTimeout(() => {
// 				boxFreezed = false;
// 				clearTimeout(timer);
// 			}, 5000);
// 		}
// 	},
// 	true,
// );

/** DELEGATION */
// const table = document.querySelector("table");
// const tdCollection = document.querySelectorAll("td");
// const yellowHex = "#ffff00";

// for (let el of tdCollection) {
// 	el.style.backgroundColor = generateRandomColor();
// }

// let activeEl = null;
// let activeElData = {};

// table.addEventListener("click", function (e) {
// 	const { target } = e; // target === e.target
// 	if (target.tagName !== "TD") {
// 		return;
// 	}

// 	if (activeEl) {
// 		activeEl.style.backgroundColor = activeElData.backgroundColor;
// 		activeEl.textContent = activeElData.text;
// 		if (activeEl === target) {
// 			activeEl = null;
// 			activeElData = {};
// 			return;
// 		}
// 	}

// 	activeEl = target;
// 	activeElData.backgroundColor = activeEl.style.backgroundColor;
// 	activeElData.text = activeEl.textContent;

// 	activeEl.style.backgroundColor = yellowHex;
// 	activeEl.textContent = `Active ${activeElData.text}`;
// });

const scene = document.querySelector(".scene");
const containerScene = document.querySelector(".scene-container");
const ball = document.querySelector(".ball");
const sceneRect = scene.getBoundingClientRect();
const ballRect = ball.getBoundingClientRect();
const containerRect = containerScene.getBoundingClientRect();
const BORDER_WIDTH = 50;
const difference = (sceneRect.width - containerRect.width)/2;
let ballActive = false;
	
scene.addEventListener("mousemove", function (e) {
	if (!ballActive) return;

	const { clientX, clientY } = e;
	const left = clientX - sceneRect.left - BORDER_WIDTH - ballRect.width / 2;
	const top = clientY - sceneRect.top - BORDER_WIDTH - ballRect.height / 2;

	

	if(clientX - difference - ballRect.width / 2 > sceneRect.left
		 && clientY - difference - ballRect.width / 2 > sceneRect.top
		 && clientY < sceneRect.top + difference + containerRect.height - ballRect.width / 2
		 && clientX < sceneRect.left + difference + containerRect.width - ballRect.width / 2){
		ball.style.transform = `translate(${left}px, ${top}px)`;
	}
});

ball.addEventListener("click", () => {
	ballActive = !ballActive;
});
