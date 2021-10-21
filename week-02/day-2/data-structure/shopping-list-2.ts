'use strict';

let products: any = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
};

let bob: any = {
    'Millk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1,
}

let alice: any = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10
}

//How much does Bob pay?
function howMuchBob(listOriginal: any[], listOfSomeone: any[]) {
    let totalPrice: number = 0;
    Object.keys(listOfSomeone).forEach((key: number) => {
        totalPrice = totalPrice + listOfSomeone[key] * listOriginal[key];
        console.log(listOriginal[key]);
    });
    console.log(totalPrice);
}

howMuchBob(products, bob);


//How much does Alice pay?
//Who buys more Rice?
//Who buys more Potato?
//Who buys more different products?
//Who buys more products? (more pieces)
