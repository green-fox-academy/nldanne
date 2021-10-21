'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

let w: number = 10;
let x: number = canvas.width/2;
let y: number = canvas.height/2;

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(x - w/2, y - w/2, w, w);
