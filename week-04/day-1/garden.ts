'use strict';

/*
The task is to create a garden application, so in your main method you should create a garden with flowers and trees. 
The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange). 
After creating these plants you should show the user how the garden looks like. After that the program should water the garden twice, 
first with the amount of 40 then with 70. After every watering the user should see the state of the garden
*/

/*
The Garden

    is able to hold unlimited amount of flowers and trees
    when watering it should only water those plants that need water with equally divided amount amongst them
    eg. watering with 40 and 4 of them need water then each gets watered with 10

*/

import { Flower } from "./flower";
import { Tree } from "./tree";

class Garden {
  private flower: Flower[] = [];
  private trees: Tree[] = [];

  constructor() {
    this.flower = [new Flower('yellow'), new Flower('blue')];
    this.trees = [ new Tree('purple'), new Tree('orange')];
  }

  public watering(water: number) {
    let waterPerPlant: number = water / (this.flower.length + this.trees.length);
    console.log('Watering with ' + water);

    for (let i: number = 0; i < this.flower.length; i++) {
      if (this.flower[i].currentWaterAmount < 5) {
        this.flower[i].currentWaterAmount += waterPerPlant * 0.75;
      }
      this.flower[i].needsWater();
    }

    for (let j: number = 0; j < this.trees.length; j++) {
      if (this.trees[j].currentWaterAmount < 10) {
        this.trees[j].currentWaterAmount += waterPerPlant * 0.4;
      }
      this.trees[j].needsWater();
    }
  }

  public addFlower(Flower: Flower) {
    this.flower.push(Flower);
  }

  public addTree(Tree: Tree) {
    this.trees.push(Tree);
  }
}

let myGarden = new Garden();
myGarden.watering(40);
console.log('\n');
myGarden.watering(70);