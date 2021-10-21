'use strict';

import { Test } from "tape";
import { Numbers } from "./sum";

let test = require('tape');

test('Initializing and checking for an empty string', function (t: any) {
  //Assign
  const myNumbers = new Numbers();

  //Add
  const actual = myNumbers.sum();
  const expected = 0;

  //Assert
  t.equals(actual, expected);
  t.end();
});

test('Testing for list with 1 element', function (t: any) {
  const myNumber1 = new Numbers(6);

  const actual = 6;
  const expected = 6;

  t.equals(actual, expected);
  t.end();
})


test('Testing for list with multiple elements', function (t: any) {
  const myNumbers3 = new Numbers();
  myNumbers3.addNumber(2);
  myNumbers3.addNumber(6);
  myNumbers3.addNumber(7);

  const actual = myNumbers3.sum();
  const expected = 15;

  t.equals(actual, expected);
  t.end();
});

