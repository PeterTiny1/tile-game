let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width;
let height;

function setCanvasSize() {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
}

window.onresize = setCanvasSize;

function draw() {
	context.fillRect(0, 0, width / 2, height / 2);

	requestAnimationFrame(draw);
}
setCanvasSize();
draw();
