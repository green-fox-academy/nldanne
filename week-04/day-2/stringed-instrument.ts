'use strict';

import { Instrument } from "./instrument";

abstract class StringedInstrument extends Instrument {
  protected numberOfStrings : number;

  constructor(name: string, number?: number) {
    super(name);
    this.numberOfStrings = number ?? 0;
  }

  public abstract sound() :string;

}

export { StringedInstrument };