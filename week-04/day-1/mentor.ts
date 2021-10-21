'use strict';

import { Person } from './person';

class Mentor extends Person {
  protected level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this.level = level ?? 'intermediate';
  }

  public getGoal() :void{
    console.log('My goal is: Educate brilliant junior software developers');
  }

  introduce() :void {
    console.log(`Hi I'm ${this.name}, a ${this.name} year old ${this.gender} ${this.gender} mentor`);
  }

}

export { Mentor };