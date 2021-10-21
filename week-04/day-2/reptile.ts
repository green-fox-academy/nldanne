'use strict';

import { Animal } from "./animal";

class Reptile extends Animal {
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

let reptile = new Reptile('Crocodile');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`)