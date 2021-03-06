'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

function drawSquare(x: number, y: number){
    let wh: number = 50;

    for (let i: number = 1; i <= 3; i++){
        ctx.beginPath();
        ctx.fillRect(x, y, wh, wh);
        ctx.fillStyle = 'black';
        x += 100;
        ctx.fillStyle = 'yellow';
    }
}

drawSquare(50,50);