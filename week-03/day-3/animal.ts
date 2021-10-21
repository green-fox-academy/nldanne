'use strict';
/*
Create an Animal class

    Every animal has a hunger value, which is a whole number
    Every animal has a thirst value, which is a whole number
    When creating a new animal instance these values must be set to the default 50 value
    Every animal can eat() which decreases its hunger by one
    Every animal can drink() which decreases its thirst by one
    Every animal can play() which increases both its hunger and thirst by one

*/

 export class Animal {
    private _hungerLevel: number;
    private _thirtsLevel: number;
    //animalName: string;

    constructor() {
        this._hungerLevel = 50;
        this._thirtsLevel = 50;
    }

    eat(): void {
        this._hungerLevel -= 1;
    }

    drink(): void {
        this._thirtsLevel -= 1;
    }

    play() : void{
        this._thirtsLevel += 1;
        this._hungerLevel += 1;
    }

    getHungerLevel() {
        return this._hungerLevel;
    }

    getThirstLevel() {
        return this._thirtsLevel;
    }
}
/*
let zebra = new Animal('zebra');
zebra.eat();
console.log(zebra);
zebra.eat();
console.log(zebra);
zebra.drink();
console.log(zebra);
zebra.play();
console.log(zebra);
*/