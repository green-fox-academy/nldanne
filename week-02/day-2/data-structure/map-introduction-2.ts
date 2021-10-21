'use strict';

//Create a map where the keys are strings and the values are strings 
//with the following initial values

let myMap: any = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
}

//Print all the key-value pairs in the following format
for(let key in myMap) {
    console.log(`${myMap[key]} (ISBN: ${key})`);
}

//Remove the key-value pair with key 978-1-60309-444-3
//const isbn: string = '978-1-60309-444-3';
delete myMap['978-1-60309-444-3'];
console.log(myMap);

//Remove the key-value pair with value The Lab
let  theKey: string = '';
Object.keys(myMap).forEach(key => {
    if (myMap[key] === 'The Lab') {
        theKey += key;
        //console.log(typeof(myMap[key]));
    }
});

delete myMap[theKey];
console.log(myMap);


//Add the following key-value pairs to the map
myMap['978-1-60309-450-4'] = 'They Called Us Enemy';
myMap['978-1-60309-453-5'] = 'Why Did We Trust Him?';
console.log(myMap);



const key2: string = '478-0-61159-424-8';
console.log('There is a value associated to ' + key2 + ' statment is, ' + (key2 in myMap));

//Print the value associated with key 978-1-60309-453-5
const key3: string = '978-1-60309-453-5';
Object.keys(myMap).forEach(key => {
    if (key === key3){
        console.log(myMap[key]);
    }
})