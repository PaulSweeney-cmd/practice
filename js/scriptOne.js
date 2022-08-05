//! write some built in Math objects

Math.floor(Math.random() * 100) // rounds the number down to the nearest whole number
Math.random() // generates a random number betwee 0 and 1
Math.ceil(22.5) // returns the smallest number greater than or equal to the decimal number

function getMathNumber() {
  const one = Math.random() * 100;
  const result = Math.floor(one);
  const sentence =  `The number returned from the math objects is ${result}`;
  return sentence;
}
console.log(getMathNumber());


//! Demonstrate the length property

const demoLength = () => {
  const sentence = 'This is a sentence with a number equating to ';
  const wholeNumber = 15;
  if (sentence.length >= 15 || wholeNumber === 15 ){
    return `${sentence}${wholeNumber}`;
  } else {
    return 'unable to find value';
  }
}

console.log(demoLength());

//! Demonstrate string interpolation
function produceStringInt() {
  const numOne = 30;
  const numTwo = 50;

  const vehicleObject = {
    name: 'Paul',
    age: 38,
    location: 'Lincolnshire',
    vehicle: 'Ford Focus'
  }

  if (numOne === 30 && numTwo != 51) {
    // using string interpolation to pass object data in to the string
    return `${vehicleObject.name} is ${vehicleObject.age} years old. He lives in ${vehicleObject.location} and he drives a ${vehicleObject.vehicle}.`;
  } else {
    return 'undefined';
  }
}
console.log(produceStringInt());

//! Demonstrate a basic conditional statement
// you can't re-assign a value to a variable in it's block scope, the result would be no output
// if/else statements
// logical operators: > < >= <= !== ===
// && to check two conditions both of which should be true
// || OR OPERATOR, ! NOT (OR BANG) OPERATOR to check that one or the other condition must evaluate to true


function checkConditions() {
  const person = {
    name: 'Paul Sweeney',
    age: 38
  }
  // the conditional if else statement checks if the values passed down from the person object are true
  if (person.name != 'Josh Sweeney' && person.age >= 38) {
    return "This is person I've been looking for.";
  } else {
    return "This is not the person I've been looking for.";
  }
}

const personCondition = checkConditions;
console.log(personCondition());

//! Write the 5 falsy values

//* 1 - 0
//* 2 - null
//* 3 - Undefined
//* 4 - "" or ''
//* 5 - NaN

//! Write an else/if statement
// else if statements check the conditions not the values

const day = 'Friday';
if (day === 'Monday') {
  console.log(`${day} is the correct day of the week`);
} else if (day === 'Tuesday') {
  console.log(`${day} is the correct day of the week`);
} else if (day === 'Wednesday') {
  console.log(`${day} is the correct day of the week`);
} else if (day === 'Thursday') {
  console.log(`${day} is the correct day of the week`);
} else if (day === 'Friday') {
  console.log(`${day} is the correct day of the week`);
} else {
  console.log('The correct day is not in the statement');
}

//! Write a switch case statement
// switch cases check the value not the condition

const currentCity = 'Lincoln';
switch (currentCity) {
  case 'Nottingham':
    console.log(`${currentCity} is the correct location`);
    break;
  case 'London':
    console.log(`${currentCity} is the correct location`);
    break;
  case 'Lincoln':
    console.log(`${currentCity} is the correct location`);
    break;
  case 'Edinburgh':
    console.log(`${currentCity} is the correct location`);
    break;
  case 'Birmingham':
    console.log(`${currentCity} is the correct location`);
    break;
  default:
    console.log('Location has not been found');
}

//! Short circuit evaluation
// uses the ||(or) operator to update a identifier to a truthy value
// checks the value of an identifier from the left

function falseToTrue() {
  const newCar = 'Porsche 911 Turbo';
  const carPrice = 0;

  if (newCar === 'Porsche 911 Turbo') {
    return `Paul has bought a brand new ${newCar} worth ${carPrice||'100,000.00'}`;
  }
}

console.log(falseToTrue());

//! Ternary operator
//* a short hand if else statement

const dog = 'Roxy';
const checkValue = dog === 'Roxy' ? console.log(`The dog's name is ${dog}`) : console.log('Value no found');

//! Function with default params and update the arguments accordingly
// assigns a parameter with a default argument if you don't yet know what argument your'e passing in to the function

const defaultParamFunc = (firstName = 'Steve', lastName = 'Johnson') => {
  return `The first name has been updated to ${firstName} ${lastName}`;
}
const short = defaultParamFunc;
console.log(short('Paul', 'Sweeney'));

//! Helper functions
//* return a value of a function inside of another function

function addTwoTogether(num1, num2) {
  const addition = num1 + num2;
  return addition;
}
// helper function takes the first function and applies addional calculations
function divideAddFunc(num1, num2) {
  const division = addTwoTogether(num1, num2) / 2;
  return division;
}

// you can include additional math objects here
console.log(divideAddFunc(100, 200));

//! Function expressions
//* creating a variable and assigning an anonymous function to perform a task

const createExpr = function(distance, time) {
  const calcJourney = distance / time;
  return calcJourney;
}
console.log(Math.floor(createExpr(950, 36)));

//! Concise body function
//* takes only one parameter, this doesn't need to be in paretheses

const concBod = val3 => val3 / 100;
console.log(concBod(350000));

//? GLOBAL SCOPE = variables declared the let keyword(mutable) that are available to the global name space

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

//? BLOCK SCOPE = variable declared inside of a conditional for, if, while, switch ...etc are available to that particular condition of loop

const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";

  if (region === "The Arctic") {
    let lightWaves = "Northern Lights"; // updating the variable if the condition is true
    console.log(lightWaves);
  }
  console.log(lightWaves); // otherwise the original value prints to the console
};

//? FUNCTION SCOPE = variables assigned inside of a function are only available within a function and cannot be used outside of that function << BEST PRACTICE! ALWAYS PLAY IT SAFE.

function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}