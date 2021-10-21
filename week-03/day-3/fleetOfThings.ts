'use strict';

import { Thing } from './things';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

/*  -------------   Solution 1  --------------------
let thing1 = new Thing('Get millk');
fleet.add(thing1);

let thing2 = new Thing('Remove the obstacles');
fleet.add(thing2);

let thing3 = new Thing('Stand up');
thing3.complete();
fleet.add(thing3);

let thing4 = new Thing('eat lunch');
thing4.complete();
fleet.add(thing4);

-----------------------------------------------------*/


// -------------  Solution Optimized  -------------- 


fleet.add(new Thing('Get milk'));
fleet.getThings()[0].toString();

fleet.add(new Thing('Remove the obstacles'));
fleet.getThings()[1].toString();

fleet.add(new Thing('Stand up'));
fleet.getThings()[2].complete();
fleet.getThings()[2].toString();

fleet.add(new Thing('Eat lunch'));
fleet.getThings()[3].complete();
fleet.getThings()[3].toString();

console.log(fleet.toString());