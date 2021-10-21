'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern
const size: number = 50;
const height: number = 50;
let xPos = 0;
let yPos = 0;
//let xPos2 = 0;
//let yPos2 = height;


// vertical looping
for (let i: number = 0; i < canvas.width/2; i++){
    //document.write('I am a row');

    // for every uneven row
    if (i === 0 || i % 2 === 0) {
    //horizontal looping
        for (let j: number = 0; j < 8; j++){
            //document.write('I am a col');
            if (j === 0 || j % 2 === 0 ) {
                //ctx.fillRect(xPos, yPos, size, height);
                ctx.fillStyle = 'yellow';
                //xPos += 50;
            } else {
            // ctx.fillRect(xPos, yPos, size, height);
                ctx.fillStyle = 'black';
                //xPos += 50;
            }
            ctx.fillRect(xPos, yPos, size, height);
            xPos += size;
        }

    // for every even row
    } else {
        //horizontal looping
 
        for (let k: number = 0; k < 8; k++) {
            if (k === 0 || k % 2 === 0) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'yellow';
            }
            ctx.fillRect(xPos, yPos, size, height);
            xPos += size;
        }

    }
    xPos = 0;
    yPos += size;
   // xPos2 = 0;

}
