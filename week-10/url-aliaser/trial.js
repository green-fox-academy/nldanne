function randomNumberGenerator(length) {
  let random = '';
  for (let i = 0; i < length; i++) {
    let number = Math.floor(Math.random()* 10);  // random integer from 0 to 9
    random += number;
  }

  return Number(random);
};

console.log(randomNumberGenerator(4));