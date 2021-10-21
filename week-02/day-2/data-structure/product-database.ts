'use strict';

let productList: Object = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
};

//How much is the fish?
function fish(list: any, string1: string) : void {
    for (let keys in list){
        if(keys === string1){
            console.log(`The ${string1} is ${list[keys]}`);
        }
    }
}

fish(productList, 'Fish');

//What is the most expensive product?
function expensive(list: any) {
    let max: number = 0;
    let product: string = '';
    for (let key in list) {
        if (list[key] > 0) {
            max = list[key];
            product = key;
        }

    }
    console.log('The most expensive product is: ' + product);
}
expensive(productList);

//What is the avg price?
function avg(list: any) : void {
    let total: number = 0;
    let count: number = 0;
    
    for (let key in list) {
        count++;
        total += list[key];
    }
    console.log(total/count);
}

avg(productList);


//How many products are priced below 300
function below300(list: any, number: number) :void {
    let count: number = 0;

    for (let key in list) {
        if (list[key] < number) {
            count++;
        }
    }
    console.log(`There are ${count} product priced below ${number}`);
}

below300(productList, 300);

function buyFor125(list: any, number: number): void {
    for (let key in list) {
        if (list[key] === number){
            console.log(`We can buy something for ${number}`);
        } 
        console.log(`There is nothing for ${number}`);
    }
}

buyFor125(productList, 125);


//What is the cheapest product 
function cheapest(list: any) : void {
    let min: number = 0;
    let temp: number = 0;
    for (let key in list) {
        temp = list[key];
        if (temp < list[key] ){
            min = temp;
        }
    }
    console.log(min);
}

cheapest(productList);