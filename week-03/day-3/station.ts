'use strict';

/*
Station
        it stores how much gas is avaliable: gasAmount
        it can refill a car: refill(car: Car):
            decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
            increases the car's gasAmount
*/
import { Car } from './car';

class Station {
    private gasAmount: number;
    private car: Car[];

    constructor() {
        this.gasAmount = 100;
        this.car = [];
    }

    public refill(car: Car): number {
        this.gasAmount = this.gasAmount - car.getCapacity();
        let newAmount = car.getGasAmount() + car.getCapacity();
        return newAmount;
    }

    public getGasStation() : number {
        return this.gasAmount;
    }

}

export { Station };