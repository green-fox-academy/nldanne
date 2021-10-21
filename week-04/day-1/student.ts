'use strict';

import { Person } from './person';

class Student extends Person {
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization ?? 'The School of Life';
    this.skippedDays = 0;
  }

  public getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() : void {
    console.log(`Hi I'm ${this.name}, a ${this.age} year old ${this.gender}, from ${this.previousOrganization}, who skipped ${this.skippedDays} from the course already.`);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

//let student = new Student();
//console.log(student);

export { Student };