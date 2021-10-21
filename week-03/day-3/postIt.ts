'use strict';

/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }

    printSentence() {
        return (`a/an ${this.backgroundColor} with ${this.textColor} text: "${this.text}`);
    }
}

let postIt1 = new PostIt('Orange', 'Idea 1', 'blue');
let postIt2 = new PostIt('Pink', 'Awesome', 'black');
let postIt3 = new PostIt('Yellow', 'Superb!', 'green');
console.log(postIt1.printSentence());
console.log(postIt2.printSentence());
console.log(postIt3.printSentence());

