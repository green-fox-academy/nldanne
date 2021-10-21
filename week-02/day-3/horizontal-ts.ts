'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50 long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function drawHorizontal(x: number, y: number) {
  for(let i: number = 1; i <= 3; i++) {

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();

    y += 100;
  }
}
drawHorizontal(0, 50);