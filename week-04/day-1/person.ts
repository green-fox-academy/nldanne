'use strict';

class Person {
  protected name:string;
  protected age: number;
  protected gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this.name = name ?? 'Jane Doe';
    this.age = age ?? 30;
    this.gender = gender ?? 'female';

  }

  public getGoal() :void {
    console.log('My goal is: Live for the moment');
  }

  introduce() : void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
  }

//public getName() {  ---> use a getter if the fields are private to use it in child classes
//    return this.name;
//  }
}

let jane = new Person();
console.log(jane);

export { Person };