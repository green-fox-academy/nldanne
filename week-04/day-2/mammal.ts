'use strict';

import { Animal } from "./animal";

class Mammal extends Animal {
  constructor(name: string, age? : number) {
    super(name, age);
  }

  public getName() :string{
    return this.name;
  }

  public breed() : string{
    return ('pushing miniature versions out');
  }
}

let mammal = new Mammal('Koala');
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`)