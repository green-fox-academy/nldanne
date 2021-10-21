'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

function toCenter(x: number, y: number) {
    let center: number = canvas.width/2;

    for (let i: number = 0; i < canvas.height/20; i++){

        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.moveTo(x, y);
        ctx.lineTo(center, y);
        ctx.stroke();
        
        y += 20;
    }
}
toCenter(600, 0);