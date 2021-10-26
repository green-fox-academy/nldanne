'use strict';

import { F16 } from "./f16";
import { F35 } from "./f35";

class Carrier {
  private aircraftF16: F16[];
  private aircraftF35: F35[];
  private storedAmmo: number;
  private healthPoint: number;
  private totalDamage: number;
  private aircraftCount: number;

  constructor(ammo: number, HP: number) {
    this.aircraftF16 = [];
    this.aircraftF35 = [];
    this.storedAmmo = ammo;
    this.healthPoint = HP;
    this.totalDamage = 0;
    this.aircraftCount = 0;
  }

  public add(type: string) :void {
    if(type.toUpperCase() === 'F16') {
      this.aircraftF16.push(new F16());
      this.aircraftCount++;

    } else if(type.toUpperCase() === 'F35') {
      this.aircraftF35.push(new F35());
      this.aircraftCount++;

    } else {
      console.log('Invalid aircraft type');
    }
  }


  public fill() :void {
    //let priority: boolean = true;

    try {
      if(this.storedAmmo === 0) {
        throw ('No ammo on the carrier!');
      }
    } catch (error) {
       console.log('Sorry, ' + error);
    }

    if(this.storedAmmo > 0) {
      let currentAmmo: number = 0;

        for (let i: number = 0; i < this.aircraftF35.length; i++) {
          currentAmmo = this.aircraftF35[i].refillAmmo(this.storedAmmo);
          this.storedAmmo -= 12;
          this.totalDamage += 600;
        }   
  
        for (let j: number = 0; j < this.aircraftF16.length; j++) {
          currentAmmo = this.aircraftF16[j].refillAmmo(this.storedAmmo);
          this.storedAmmo -= 8;
          this.totalDamage += 240;
        }

    }

  }
 


  public fight(carrier: Carrier) :void {
    let enemyHealth: number = carrier.healthPoint;

    for(let i: number = 0; i < this.aircraftF35.length; i++) {
      if(this.aircraftF35[i].getCurrentAmmo() > 0) {
        if(enemyHealth === 0) {
          console.log(`It's dead Jim :(.`);

        } else {
          this.totalDamage += this.aircraftF35[i].fight();
          enemyHealth -= this.aircraftF35[i].fight();
        }
      }
    }
    

    for(let j: number = 0; j < this.aircraftF16.length; j++) {
      if(this.aircraftF16[j].getCurrentAmmo() > 0) {
        if(enemyHealth === 0) {
          console.log(`It's dead Jim :(.`);

        } else {
          this.totalDamage += this.aircraftF16[j].fight();
          enemyHealth -= this.aircraftF16[j].fight();
        //  console.log(enemyHealth);
        }
      }

    }

    if(enemyHealth > 0) {
        //console.log(this.getStatus());
        console.log(`Enemy is still alive! HP: ${enemyHealth}`);
      } else {
        console.log(`Jim it\'s dead :(. HP: ${enemyHealth}`);
      }



  }


  public getStatus() :string {
    let status: string = `HP: ${this.healthPoint}, Aircraft count: ${this.aircraftCount}, Ammo Storage: ${this.storedAmmo}, Total damage: ${this.totalDamage}`;
    let f35: string = '';
    let f16: string = '';

    for (let i: number = 0; i < this.aircraftF35.length; i++) {
      f35 += this.aircraftF35[i].getStatus() + '\n';
    }

    for (let j: number = 0; j < this.aircraftF16.length; j++) {
      f16 += this.aircraftF16[j].getStatus() + '\n';
    }

    return `${status}\nAircrafts:\n${f35}${f16} `;
  }


}


let myStuff =  new Carrier(120, 5000);
myStuff.add('f16');
myStuff.add('f16');
myStuff.add('f16');
//console.log(myStuff);
myStuff.add('f35');
myStuff.add('f35');
myStuff.add('f35');
myStuff.add('f35');
myStuff.add('f35');
myStuff.add('f35');
//myStuff.add('f35');

//console.log(myStuff);

//console.log(myStuff.getStatus());
myStuff.fill();
//console.log(myStuff.getStatus());

let secondStuff = new Carrier(50, 4000);
secondStuff.add('f16');
secondStuff.add('f35');
//console.log(secondStuff.getStatus());

myStuff.fight(secondStuff);
