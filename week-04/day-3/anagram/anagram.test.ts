'use strict';

import { Test } from "tape";
import { isAnagram } from "./anagram";

let test = require('tape');

test('The function is invoked with no strings', function (t: any) {
  const noString = isAnagram();

  const actual = noString;
  const expected = false;

  t.equals(noString, false);
  t.end();
});

test('The function is invoked with one string', function (t: any) {
  const oneString = isAnagram('hello');

  const actual = oneString;
  const expected = false;

  t.equals(actual, expected);
  t.end();
});

test('The function is invoked with two strings with different length', function (t: any) {
  const twoDifferentStrings = isAnagram('hello', 'papaya');

  const actual = twoDifferentStrings;
  const expected = false;

  t.equals(actual, expected);
  t.end();
});

test('The function is invoked with two non-anagram strings with equal length', function (t: any) {
  const twoNonAnagramStrings = isAnagram('heating', 'pissing');

  const actual = twoNonAnagramStrings;
  const expected = false;

  t.equals(actual, expected);
  t.end();
});

test('The function is invoked with two strings that are anagrams', function (t: any){
  const twoStrings = isAnagram('hello', 'eholl');

  const actual = twoStrings;
  const expected = true;

  t.equals(actual, expected);
  t.end();
});