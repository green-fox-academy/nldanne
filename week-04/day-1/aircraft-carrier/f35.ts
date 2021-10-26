'use strict';


import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {
  protected type: string;
  protected currentAmmo: number;
  protected allDamage: number;

  constructor() {
    super();
    this.type = 'F35';
    this.currentAmmo = 0;
    this.maxAmmo = 12;
    this.baseDamage = 50;
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
    return true;
  }

  public getCurrentAmmo() :number {
    return this.currentAmmo;
  }
}
/*
let myBoom = new F35();
console.log(myBoom);

console.log(myBoom.refillAmmo(30));
console.log(myBoom.getStatus());

*/