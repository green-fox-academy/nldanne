'use strict';

import { Animal } from "./animal";

export class Mammal extends Animal {
  protected numberOfLegs: number;
  protected hunger: number;

  constructor(name: string, age? : number) {
    super(name, age);
    this.hunger = 10;
    this.numberOfLegs = 4;
  }

  public getName() :string{
    return this.name;
  }

  public breed() : string{
    return ('pushing miniature versions out');
  }

  public eat(): void{
    this.hunger--;
  }
}

let mammal = new Mammal('Koala');
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`)