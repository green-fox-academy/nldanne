'use strict';

import { Test } from "tape";
import { Apple } from "./apple";

let test = require('tape');

test('Checking for string apple', function (t: any) {
  const myApple = new Apple();

  const actual = myApple.getName();
  const expected = 'apple';

  t.equals(actual, expected);
  t.end();

});