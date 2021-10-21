'use strict';

let phoneMap: any = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
}

//Create an application which prints out 
//the answers to the following questions:

let q1: string = 'What is John K. Miller\'s phone number?';
let q2: string = 'Whose phone number is 307-687-2982?';
let q3: string = 'Do we know Chris E. Myers\' phone number?';

let john: string = 'John K. Miller';
let chris: string = 'Chris E. Meyers';
let phoneNum: string = '307-687-2982';





function printAnswer(map: any[]){
    // printing for 1st question
    let  theName: string = '';
    Object.keys(map).forEach(key => {
    if (map[key] == '307-687-2982'){
        theName += key;
        }
    },
    console.log(`${q2} \n ${theName}`));

    // printing for 2nd question
    let phoneIs: string = '';
    for(let key in map) {
    if (key === john) {
        phoneIs += map[key];
        }
    }
    console.log(`${q1} \n ${phoneIs}`);

    // printing for 3rd question
    let truth: boolean = false;
    for(let key in map) {
    if (key === chris) {
        truth = true;
        }
    }    
    console.log(`${q2} \n ${truth}`);
    
}



printAnswer(phoneMap);
