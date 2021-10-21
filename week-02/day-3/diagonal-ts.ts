'use strict';

import { strictEqual } from "assert";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function drawLine(y: number) {
    let colour: string = '';
    let random: number = Math.floor(Math.random()*10); //generates a random number between 0 and 9
    ctx.beginPath();
    ctx.moveTo(random, random);
    if(random === 0) {
        ctx.strokeStyle = 'green';
    } else {
        ctx.strokeStyle = 'red';
    }
    ctx.lineTo(y, y);
    ctx.stroke();
}

drawLine(50);