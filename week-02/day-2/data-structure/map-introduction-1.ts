'use strict';

//We are going to play with maps. Feel free to use the built-in methods where possible.
//Create an empty map where the keys are integers and the values are characters
//Print out whether the map is empty or not
//Add the following key-value pairs to the map

let map = new Map ([
    [97, 'a'],
    [98, 'b'],
    [99, 'c'],
    [65, 'A'],
    [66, 'B'],
    [67, 'C']
]);

//console.log(Object.keys(map));
/*for (let keys in map){
    console.log(keys);
}*/

/*Object.keys(map).forEach(key => {
    console.log(map[key]);
})*/
//console.log(Object.values(map));


//map['68'] = 'D'; //to set new key/value pairs to the map
map.set(68, 'D');

let newArr: string[] = Object.keys(map);  // Object.keys(map) returns an array of string
console.log('The map has ' + newArr.length + ' key/value pairs.');

//Print the value that is associated with key 99. Output should be 'c'
console.log('The value associated to key 99 is: ' + map.get(99));

//Remove the key-value pair where with key 97
map.delete(97);
console.log(map);

//Print whether there is an associated value with key 100 or not
//Should return false
console.log(map.has(100));

//Remove all the key-value pairs
map.clear();
console.log(map);


