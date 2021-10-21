'use strict';

/*
The Flower

    needs water if its current water amount is less than 5
    when watered the flower can only absorb 75% of the water
    eg. watering with 10 the flower's amount of water should only increase by 7.5
 
*/

class Flower {
   flowerColour: string;
   currentWaterAmount: number;

  constructor(colour: string, waterAmount?: number) {
    this.flowerColour = colour;
    this.currentWaterAmount = waterAmount ??  0;
  }

  needsWater() {
    if (this.currentWaterAmount < 5) {
      console.log(`The ${this.flowerColour} needs water.`);
    }
    else {
      console.log(`The ${this.flowerColour} doesn't need water.`);
    }
  }

  public getCurrentWaterAmount() :number{
    return this.currentWaterAmount;
  }

}
/*
let flower = new Flower('yellow');
flower.watering(40);
console.log(flower.getCurrentWaterAmount());
*/
export { Flower };