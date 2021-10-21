'use strict';

import { Test } from "tape";
import { printDictionary } from "./count-letters";

const test = require('tape');

test('Prints dictionary for string hello correctly', function (t: any) {
  const myDictionary = printDictionary('hello');

  const actual = myDictionary;
  const expected = {
    'h': 1,
    'e': 1,
    'l': 2,
    'o': 1
  }
  //Assert that actual and expected have the same structure and nested values
  t.deepLooseEqual(actual, expected);
  t.end();
});