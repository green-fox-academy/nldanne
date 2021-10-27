'use strict';

/*

    Create Counter class
        which has a counter (integer) field
            at creation it should have a default value 0
        there are two ways to create the class:
            with 0 input parameters
            with 1 input parameter called counter which is set as the initial value of the counter field
        we can add another whole number to this counter: add(number)
        we can just increase the counter's value by one: add() (no parameters)
        we can get() the current counter value
        and we can reset() the counter to the initial value set during the construction of the class
    use export Counter at the end of your file
    Check if everything is working fine with the proper test
        Download counter.test.ts and place it next to your solution
        Run npm install tape @types/tape --save-dev in the root of your repository folder (where you have a package-lock.json file already)
        Run the test file with ts-node

*/

export class Counter {
    private counter: number;
    private initialCounter: number;

    constructor(input?: number) {
        this.counter = input ?? 0;
        this.initialCounter = input ?? 0;
    }

    public add(number?: number) {
        if(number) {
            this.counter =  this.counter + number;
        } else {
            this.counter++;
        }
    }

    public get() {
        return `The counter is at ${this.counter}`;
    }

    public reset() {
        this.counter = this.initialCounter;
        return (`The original counter was at ${this.counter}`);
    }
}

let counter1 = new Counter ();
counter1.add();
console.log(counter1);
counter1.get();
console.log(counter1);
counter1.reset();
console.log(counter1);