'use strict';

/*
    Create a class that represents an aircraft
    There are 2 types of aircrafts: F16 and F35
    Both aircrafts should keep track of their ammunition
*/

abstract class Aircraft {
    protected maxAmmo: number;
    protected baseDamage: number;

    constructor() {
        this.maxAmmo = 0;
        this.baseDamage = 0;
    }

    abstract fight() :number;
    abstract refillAmmo(number:number) :number;
    abstract getType() :string;
    abstract getStatus() :string;
    abstract isPriority() :boolean;
    
}

export { Aircraft };