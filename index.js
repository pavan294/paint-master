const canvas = document.querySelector('canvas');

// resizing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
const c = canvas.getContext('2d');

c.strokeStyle = "#fff";
c.lineWidth = 7;
c.linecap = "round";

let draw = false;

document.addEventListener("mousedown", function(){
	draw = true;
	c.beginPath();
});

document.addEventListener("mouseup", function(){
	draw = false;
});

document.addEventListener("mousemove",function(event){
	if(draw) {
		c.lineTo(event.pageX, event.pageY);
		c.stroke();
	}
});

var colors = document.querySelectorAll('nav a');
colors.forEach((element) => {
	element.addEventListener("click", function(event){
		c.strokeStyle = element.style.backgroundColor;
	});
})
