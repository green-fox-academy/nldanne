'use strict';

import { Person } from './person';

class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this.company = company ?? 'Google';
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`Hi I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} so far.`);
  }

  hire() {
    this.hiredStudents = this.hiredStudents + 1;
  }

  public getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

}
/*
let sponsor = new Sponsor();
console.log(sponsor);
*/


export { Sponsor };