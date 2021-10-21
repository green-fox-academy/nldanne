'use strict';

import exp from "constants";

/*
The Tree

    needs water if its current water amount is less than 10
    when watered the tree can only absorb the 40% of the water
    eg. watering with 10 the tree's amount of water should only increase by 4

*/

class Tree {
   treeColour: string;
   currentWaterAmount: number;

  constructor(colour: string, waterAmount?: number) {
    this.treeColour = colour;
    this.currentWaterAmount = waterAmount ?? 0;
  }

  needsWater() {
    if (this.currentWaterAmount < 10) {
      console.log(`The ${this.treeColour} tree needs water.`);
    } else {
      console.log(`The ${this.treeColour} tree doesn't need water.`);
    }
  }

  public getCurrentWater() :number{
    return this.currentWaterAmount;
  }
}

export { Tree };