'use strict';

class Pirate {
    name: string;
    drunk: number;
    life: number;
    counter: number;

    constructor(name: string, drunk: number, life: number) {
      this.name = name;
      this.drunk = drunk;
      this.life = life;
      this.counter = 0;
    }
  
    drinkSomeRum() : void{
      this.drunk = this.drunk -1;
      this.counter++;
      
      if (this.life === 0) {
          console.log('He\'s dead.');
      }
    }
  
    howsItGoingMate(): void{
      if (this.counter <=4) {
        console.log('Pour me anudder!');
      }else {
        console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
        this.drunk = 0;
      }
    }
  
    brawl(pirate: Pirate) : void{
      var chance = Math.floor(Math.random() * 3) + 1;
      console.log(chance);
  
      if (chance == 1){
        pirate.life = 0;
        console.log(`${pirate.name} pirate is dead, his life is: ${pirate.life}`);
  
      } else if ( chance == 2){
        this.life = 0;
        console.log(`${this.name} pirate is dead, and his life is: ${this.life}`);
  
      } else {
        pirate.drunk = 0;
        this.drunk = 0;
        console.log('Both pirates are passed out.')
      }
    }
  
    die() : void{
      this.life = 0;
      console.log('The pirate is dead...');
    }
  
  }
  
  let pirate1 = new Pirate('Captain Jack Sparrow', 10, 100);
  
  let pirate2 = new Pirate('Captain Jack Harrow', 10, 100);
  
  /*
  pirate1.drinkSomeRum();
  pirate1.drinkSomeRum();
  pirate1.howsItGoingMate();
  pirate1.die();
  console.log(pirate1);
  */
  
  pirate1.brawl(pirate2);
  console.log(pirate1);
  console.log(pirate2);
  
  //var chance = Math.floor(Math.random() * 3) + 1;
  //console.log(chance);