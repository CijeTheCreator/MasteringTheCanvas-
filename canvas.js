var canvas = document.querySelector("canvas");
document.onmousemove = function (e) {
  var x = e.pageX;
  var y = e.pageY;
  console.log(`X: ${x}\nY:${y}`);
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// c.fillStyle = "pink";
// c.fillRect(275, 268, 100, 100);
// c.fillStyle = "pink";
// c.fillRect(174, 168, 100, 100);
// c.fillStyle = "orange";
// c.fillRect(273, 67, 100, 100);
// c.fillStyle = "orange";
// c.fillRect(373, 167, 100, 100);

// //Line
// c.beginPath();
// c.moveTo(175, 169);
// c.lineTo(274, 68);
// c.lineTo(373, 68);
// c.lineTo(473, 168);
// c.lineTo(473, 267);
// c.lineTo(375, 369);
// c.lineTo(276, 369);
// c.lineTo(174, 267);
// c.lineTo(175, 169);
// c.strokeStyle = "red";
// c.stroke();

// for (let i = 0; i < 100; i++) {
//   c.beginPath();
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   const strokeStyles = ["red", "yellow", "blue", "purple"];
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = strokeStyles[Math.floor(Math.random() * 3.9)];
//   c.stroke();
// }

// Creating Arcs

let x = Math.random() * innerWidth;
let dx = (Math.random() - 0.5) * 8;
let y = Math.random() * innerHeight;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;

const Circle = function (x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };
  this.update = function () {
    this.y += this.dy;
    this.x += this.dx;
    if (this.x + this.radius > innerWidth) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    if (this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.draw();
  };
};

const circles = [];
for (let i = 0; i < 100; i++) {
  const circle = new Circle(
    Math.random() * innerWidth - radius * 2 + radius * 2,
    Math.random() * innerHeight - radius * 2,
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 4,
    radius
  );
  circles.push(circle);
}
console.log(circles);
const animate = function () {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
};

animate();
