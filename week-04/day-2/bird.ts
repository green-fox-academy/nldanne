'use strict';

import { Animal } from "./animal";

export class Bird extends Animal {
  constructor(name: string, age? : number) {
    super(name, age);
  }

  public getName() :string{
    return this.name;
  }

  public breed() : string{
    return ('laying eggs.');
  }
}

let bird = new Bird('Crocodile');
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`)