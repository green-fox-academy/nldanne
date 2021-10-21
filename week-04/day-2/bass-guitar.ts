'use strict';

import { Instrument } from "./instrument";
import { StringedInstrument } from "./stringed-instrument";

class BassGuitar extends StringedInstrument {
  protected soundsLike: string;
  protected type: string;

  constructor(number?: number, soundsLike?: string, name?: string) {
    super(name ='Guitar');
    this.numberOfStrings = number ?? 4;
    this.soundsLike = soundsLike ?? 'Duum-duum-duum';
    this.type = 'Bass';
  }

  public sound() : string{
    return this.soundsLike;
  }

  public getName() : string{
    return this.name;
  }

  public play() :void {
    console.log(` ${this.type} ${this.getName()} is a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
  }
}
/*
let bass = new BassGuitar();
bass.play();
*/

export { BassGuitar };