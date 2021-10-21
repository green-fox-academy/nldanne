'use strict';

import { Animal } from './animal'

class Farm {
    private listOfAnimals: Animal[];
    private limit: number;

    constructor(limit: number) {
        this.limit = limit;
        this.listOfAnimals = [];
    }

    public breed() :void {
        if (this.listOfAnimals.length < this.limit) {
                this.listOfAnimals.push(new Animal());
        } else {
            console.log('Sorry the farm is full');
        }
    }

    public sell() : void{
        let leastHungryAnimal: Animal = this.listOfAnimals[0];
        let indexOfLeastHungryAnimal: number = 0;

        for (let i: number = 1; i < this.listOfAnimals.length; i++) {
            if(this.listOfAnimals[i].getHungerLevel() < leastHungryAnimal.getHungerLevel() ) {
                leastHungryAnimal = this.listOfAnimals[i];
                indexOfLeastHungryAnimal = i;
            }
        }
        this.listOfAnimals.splice(indexOfLeastHungryAnimal, 1);
    }

    public getListOfAnimals() : Animal[] {
        return this.listOfAnimals;
    }

    public getLimit() : number {
        return this.limit;
    }
}

let farm = new Farm(5);
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.getListOfAnimals()[2].eat();
console.log(farm.getListOfAnimals());
farm.sell();
console.log(farm.getListOfAnimals());

//console.log(farm.getListOfAnimals());
