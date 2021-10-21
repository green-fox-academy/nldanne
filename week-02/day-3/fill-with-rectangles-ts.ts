'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

function draw4(colour1: string, colour2: string, colour3: string, colour4: string,){
    let counter: number = 1;
    let x: number = 50;
    for (let i: number = 1; i <= 4; i++){
        ctx.beginPath();
        ctx.fillRect(x, x, x, x);
        if(counter === 1) {
            ctx.fillStyle = colour1;
        } else if (counter === 2) {
            ctx.fillStyle = colour2;
        } else if (counter === 3){
            ctx.fillStyle = colour3;
        } else {
            ctx.fillStyle = colour4;
        }

        counter++;
        x += 50;
    }
}

draw4('red', 'blue', 'yellow', 'blue');