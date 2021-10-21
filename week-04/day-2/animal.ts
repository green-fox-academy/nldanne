'use strict';

abstract class Animal {
  protected name: string;
  protected age: number;
  //protected gender: number;
  //protected colour: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age ?? 0;
  }

  public abstract getName(): string;
  public abstract breed(): void;
 // public abstract sleep() : string;

}

export { Animal };