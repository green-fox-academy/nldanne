'use strict';

class Apple{
  private name: string;

  constructor() {
    this.name = 'apple';
  }

  public getName() : string {
    return this.name;
  }
}

export { Apple };