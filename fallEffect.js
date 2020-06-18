//background canvas
var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");
//setting canvas dimensions to browser window size
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
var ballArray = [];
var i;

//Cicle class with properties and functions to conduct snow fall effect
class Circle {
  constructor(x, y, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
  }
  draw() {
    ctx1.fillStyle = "#e4eef7";
    ctx1.lineWidth = 0.5;
    ctx1.beginPath();
    ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx1.fill();
  }
  move() {
    if (this.y > canvas1.width) {
      this.y = 0;
    }
    this.y = this.y + this.dy;
    this.draw();
  }
}

//creating circle objects
function create() {
  for (i = 0; i < 100; i++) {
    var x = Math.random() * canvas1.width;
    var y = 0;
    var dy = Math.random() * 2;
    var radius = Math.random() * 20;
    ballArray.push(new Circle(x, y, dy, radius));
  }
}

//animating the canvas using requestAnimationFrame method
function animate() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  for (i = 0; i < 100; i++) {
    ballArray[i].move();
  }
  window.requestAnimationFrame(animate);
}

create();
animate();
