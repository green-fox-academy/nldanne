'use strict';

import { Animal } from "./animal";

export class Reptile extends Animal {
  protected numberOfLegs: number;
  protected hunger: number;

  constructor(name: string, age? : number, legs?: number) {
    super(name, age);
    this.hunger = 10;
    this.numberOfLegs = legs ?? 0;
  }

  public getName() :string{
    return this.name;
  }

  public breed() : string{
    return ('laying eggs.');
  }

  public eat(): void{
    this.hunger--;
  }
}

let reptile = new Reptile('Crocodile');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`)