'use strict';

/*
Create a Sharpie class

    We should know the followings about each sharpie:
        color (which should be a string),
        width (which will be a number) and the
        inkAmount (another number)
    We need to specify the color and the width at creation
    Every sharpie is created with a default inkAmount value: 100
    We can use() the sharpie objects: using it decreases inkAmount by 10

*/

class Sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(sharpieColor: string, sharpieWidth: number) {
        this._color = sharpieColor;
        this._width = sharpieWidth;
        this._inkAmount = 100;
    }

    public use() {
        this._inkAmount = this._inkAmount -10;
    }

    getSharpie() {
        return (`The sharpie is ${this._color} and ${this._width}mm thick, that has ${this._inkAmount}% ink left in it.`)
    }
}

let pink = new Sharpie('pink', 10);
pink.use();
pink.use();
console.log(pink.getSharpie());