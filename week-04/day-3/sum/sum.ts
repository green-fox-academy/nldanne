'use strict';

class Numbers {
  private listOfNums: number[] = [];
  private total: number;
  private number: number;

  constructor(number?: number) {
    this.listOfNums = [];
    this.total = 0;
    this.number = number ?? 0;
  }

  public sum() :number{
    for (let i: number = 0; i < this.listOfNums.length; i++) {
      this.total += this.listOfNums[i];

    }
    return this.total;
  }

  public addNumber(number: number) : void {
    this.listOfNums.push(number);
  } 
}

/*
let hey = new Numbers([6,2,3]);
console.log(hey.sum());
console.log(hey);
*/
export { Numbers };