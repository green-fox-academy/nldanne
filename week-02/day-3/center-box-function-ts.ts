'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!

function drawSquare(w: number) {
    for (let i: number = 1; i <= 3; i++){
        let x: number = canvas.width/2 - w/2;
        let y: number = canvas.height/2 -w/2;
        ctx.strokeRect(x, y, w, w);
        w += 50;
    }
}
drawSquare(20);