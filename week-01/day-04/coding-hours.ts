'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
var weekDays: number = 5;
var weekNum: number = 17;
var hours: number = 6;

console.log('A student codes ' + weekDays * weekNum * hours + ' hours in a semester');  
//Prints: A student codes 510 hours in a semester


// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
var sumHours: number = weekDays * weekNum * hours;
var avgWeekHours: number = weekNum * 52; //884 hours

console.log('A student\'s coding hours are ' + Math.round((sumHours / avgWeekHours) * 100) + '%, compared to normal working conditions.');