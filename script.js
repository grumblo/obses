const circle = document.querySelector('.circle');
const text = document.querySelector('.text'); 
let rotationAngle = 0;

function rotateCircle() {
  rotationAngle += 1; 
  circle.style.transform = `rotate(${rotationAngle}deg)`;
  text.style.transform = `rotate(${rotationAngle}deg)`;
}

// Set the initial rotation
rotateCircle(); // Call the function once to set the initial rotation

setInterval(rotateCircle, 10); // Rotate every 10 milliseconds
