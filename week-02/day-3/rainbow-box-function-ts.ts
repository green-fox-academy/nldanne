'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function rainbowBox(size: number, colour: string) {
    let counter: number = 0;  //counter for colours
    let yPos: number = 0;
    let height: number = canvas.height/6

    for (let i: number = 1; i <= 6; i++) {

        //drawing the rectangles
        if (counter === 0){
            ctx.fillStyle = colour;
        } else if(counter == 1) {
            ctx.fillStyle = '#FF9B00';
        } else if(counter === 2) {
            ctx.fillStyle = '#FEE300';
        } else if(counter === 3) {
            ctx.fillStyle = '#02FF18';    
        } else if(counter === 4) {
            ctx.fillStyle = '#0039FE';
        } else {
            ctx.fillStyle = '#BE00FE';
        } 
        ctx.fillRect(0, yPos, size, height); //kezdo xPos, kezdo yPos, hossz, magasság
        counter++;
        yPos += height;

    }
}
rainbowBox(300,'#FD0B00');



/*
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 300, 50);

ctx.fillStyle = 'green';
ctx.fillRect(0, 50, 300, 50);

*/
/*
let counter: number = 1; 
for (let i: number = 1; i <= 6; i++) { //counter for colours
    let yPos: number = 0;
    let height: number = canvas.height/6
    ctx.fillRect(0, yPos, 300, height); //kezdo xPos, kezdo yPos, hossz, magasság

    //drawing the rectangles
    if (counter === 1){
        ctx.fillStyle = 'red';
    } else if(counter == 2) {
        ctx.fillStyle = '#FF9B00';

    } else if(counter === 3) {
        ctx.fillStyle = '#FEE300';

    } else if(counter === 4) {
        ctx.fillStyle = '#02FF18'; 
 
    } else if(counter === 5) {
        ctx.fillStyle = '#0039FE';
 
    } else {
        ctx.fillStyle = '#BE00FE';
    } 
    counter++;
    yPos += height;

}*/