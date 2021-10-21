'use strict';

import { stat } from 'fs';
/*
Car
        it stores how much gas is actually present: gasAmount
        it stores the capacity of the tank: capacity
        create a constructor for the Car class where you:
            initialize gasAmount -> 0
            initialize capacity -> 100
*/

import { Station } from './station'

class Car {
    private gasAmount: number;
    private capacity: number;

    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;
    }

    public getGasAmount(): number {
        return this.gasAmount;
    }

    public getCapacity() : number {
        return this.capacity;
    }

    public getCurrentCarStatus(station: Station) :number{
        return this.gasAmount  += station.refill(this);
    }
}

export { Car };
