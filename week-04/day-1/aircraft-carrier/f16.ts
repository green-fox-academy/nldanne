'use strict';

import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  protected type: string;
  protected maxAmmo: number;
  protected currentAmmo: number;
  protected baseDamage: number;
  protected allDamage: number;

  constructor() {
    super();
    this.type = 'F16';
    this.maxAmmo = 8;
    this.currentAmmo = 0;
    this.baseDamage = 30;
    this.allDamage = 0;
  }


  public fight() :number{
    this.currentAmmo = 0;
    this.allDamage = this.baseDamage * this.maxAmmo;
    return this.allDamage;
  }


  public refillAmmo(ammunition: number) :number {
    if(this.currentAmmo === this.maxAmmo) {
      return ammunition;

    } else {
        if(ammunition <= this.maxAmmo) {
          this.currentAmmo += ammunition;
          return 0;

        } else {
          this.currentAmmo += this.maxAmmo;
          return ammunition - this.maxAmmo;
        }   
    }
  }


  public getType() :string {
    return this.type;
  }


  public getStatus() :string {
    return (`Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.fight()}`);
  }


  public isPriority() :boolean{
    return false;
  }


  public getCurrentAmmo() :number {
    return this.currentAmmo;
  }
}

/*
let one = new F16();
console.log(one);


console.log(one.refillAmmo(6));
console.log(one);
//console.log(one.refillAmmo(20));
//console.log(one);

console.log(one.getType());
console.log(one.getStatus());
console.log(one.isPriority());
console.log(one);
*/