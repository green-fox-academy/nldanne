'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = [...listA];

//Print out whether List A contains "Durian" or not
//List A has Durian
if (listA.includes('Durian') === true) {
    console.log('List A has Durian.');
} else {
    console.log('List A does not have Durian.')
}

//Remove "Durian" from List B
/*for (let i: number = 0; i < listB.length; i++) {
    if (listB[i] === 'Durian') {
        listB.splice(i, 1);
    }
}
console.log(listB); */

// --- Alternatively remove with .filter() ----
listB = listB.filter(listB => listB !== 'Durian');
console.log(listB);


//Add "Kiwifruit" to List A after the 4th element
listA.splice(4, 0, 'KiwiFruit');
console.log(listA);

//Compare the size of List A and List B
if (listA.length === listB.length) {
    console.log('They are the same length.');
} else if (listA. length > listB.length) {
    console.log('List A has more items than list B.');
} else {
    console.log('List B has more items than List A.');
}


//Get the index of "Avocado" from List A
console.log('The index of Avocadi in List A is: ' + listA.indexOf('Avocado'));

//Get the index of "Durian" from List B
console.log('The index of Durian in List B is: ' + listB.indexOf('Durian'));

//Add "Passion Fruit" and "Pomelo" to List B in a single statement
listB.push('Pomelo', 'Passionfruit');
console.log(listB);

//Print out the 3rd element from List A
//Blueberries
console.log(listA[2]);