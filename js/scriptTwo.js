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
//* 2 - null - value doesnt exist
//* 3 - Undefined - variables that have not been assigned a value
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
  case 'Leicester':
    console.log(`${currentCity} is the correct location`);
    break;
  case 'London':
    console.log(`${currentCity} is the correct location`);
    break;
  case 'Lincoln':
  case 'Gainsborough':
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
  return `The name has been updated to ${firstName} ${lastName}`;
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

//! Function expressions - assigning an anonymous function to a variable

const createExpr = function(distance, time) {
  const calcJourney = distance / time;
  return calcJourney;
}
console.log(Math.floor(createExpr(950, 36)));

//! Concise body function - single line function that takes one parameter

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

const logVisibleWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";

  if (region === "The Arctic") {
    let lightWaves = "Northern Lights"; // updating the variable if the condition is true
    console.log(lightWaves);
  }
  console.log(lightWaves); // otherwise the original value prints to the console
};
logVisibleWaves();

//? FUNCTION SCOPE = variables assigned inside of a function are only available within a function and cannot be used outside of that function << BEST PRACTICE! ALWAYS PLAY IT SAFE.

function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleWaves();

//! Array literal
// array elements are immutable
//* create an array and index an element to print to the console

const famArray = ['Paul', 'Alex', 'Mum', 'Josh', 'blank'];
const showElement = famArray[3];
console.log(showElement); // prints 'Josh'

//* add a new element to the end of array 

famArray.push('Roxy');

//* updating an element

famArray[4] = ('Billy'); // using () instead of [] tells the programme you're assigning a new element, not creating a new array
console.log(famArray);

let relatives = ['Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank'];
console.log(relatives);

//* assign a new array to an existing identifier
//* identifier needs to be declard with the let keyword not const

relatives = ['Doreen', 'Simon', 'Donna', 'Matt', 'Morgan'];
console.log(relatives);

// //? ARRAYS - push() - adding items to the end of the array

let addAnotherRelative = relatives.push('blank');
console.log(addAnotherRelative);

//* updating an array element
relatives[5] = ('Steven');
console.log(relatives);

//! ARRAYS - let & const
// let = you can assign a new array and update an element
// const = you cannot assign a new array but you can change the elements

//? ARRAYS - pop() - removing the last item from an array

function removeEndElement() {
  const arrayZ = ['one', 'two', 'three', 'four'];
  let wordOne = 'Paul';
  let wordTwo = 'Sweeney';

  if (wordOne === 'Paul' && wordTwo === 'Sweeney') {
    arrayZ.pop();
    console.log(arrayZ);
  } else {
    console.log('This didnt go right');
  }
}

removeEndElement();

//? ARRAYS - unshift() - adding the first item to an array

function addCar() {
  const carArray = ['Jaguar', 'MG', 'Atom', 'Lamborghini', 'Ferrari'];
  const valOne = 450;

  switch (valOne) {
    case 400:
      carArray.unshift('Focus');
      console.log(carArray);
      break;
    case 345:
      carArray.unshift('Beatle');
      console.log(carArray);
      break;
    case 299:
      carArray.unshift('Porsche');
      console.log(carArray);
      break;
    case 450:
      carArray.unshift('Metro');
      console.log(carArray);
      break;
    default:
      console.log('Adding element hasnt worked');
  }
}
addCar();

//? ARRAYS - shift() - removing the first item from an array

function remove() {
  const removingFirst = ['1', '2', '3', '4', '5'];
  const a = 500;

  if (a == 540) {
    removingFirst.shift();
    console.log(`The first check worked the numbers in the new array are ${removingFirst}`);
  } else if (a != 500) {
    removingFirst.shift();
    console.log(`The second check worked the numbers in the new array are ${removingFirst}`);
  } else if (a === 501 && a === 250) {
    removingFirst.shift();
    console.log(`The third check worked the numbers in the new array are ${removingFirst}`);
  } else if (a === 500) {
    removingFirst.shift();
    console.log(`The fourth check worked the numbers in the new array are ${removingFirst}`);
  } else {
    console.log('Default');
  }
}
remove();

//? ARRAYS - slice() - returning a new array with your chosen elements
//* use indexing to select elements, remembering to make sure you use the next index up to the last element you want

const arraySlice = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
console.log(arraySlice);
const returningArray = arraySlice.slice(1, 8);
console.log(returningArray);

//? ARRAYS - indexOf() - finding the index value of an element

const checkArrInd = function() {
  const elemNum = ['Blue', 'Green', 'Yellow', 'White', 'Pink'];
  if(elemNum.indexOf('Green') === 1){
    console.log(`Correct. The index element of ${elemNum[1]} is ${elemNum.indexOf('Green')}`)
  } else {
    console.log('Default');
  }
}
checkArrInd();

//? ARRAYS and FUNCTIONS
//* create a function with an array to update the last element

function updateLastValue() {
  const lastValArray = ['Bag', 'Shakes', 'Pen', 'Water bottle', 'Blank'];
  lastValArray[4] = ('Car Keys');
  return lastValArray;
}

console.log(updateLastValue());

//? NESTED ARRAYS - storing an array inside of another array
// use bracket notation to access certain elements inside of a nested array

const numbers = [['1, 2'], ['3', '4'], ['5', '6'], ['7', '8'], ['9', '10']];
const checkVal = numbers[4][1];
console.log(checkVal);

// use bracket notation to update elements

numbers[4][1] = ('11');
console.log(numbers);

// add more elements to the end of a nested array
const extendArray = numbers[4].push('12', '13');
console.log(extendArray);

// remove elements
const deleteEnd = numbers[4].pop();
console.log(deleteEnd);

// return a new array with elements
const retArr = numbers.slice(3, 4);
console.log(retArr);


//! FOR LOOPS - loops through until a stopping condition is met
// iterator variable that appears in 3 expressions, iteration statement is used to update the iterator variable on each loop

//* 1 - initialization (where to begin the loop) expression is the first expression to start the counter at 5
//* 2 - stopping condition - loop runs as long as the number is between 5 and 10
//* 3 - iteration statement (repeat) - value of each counter increases by 1, updatesd the iterator each time the loop is completed

// for(let count = 5; count < 11; count++) {
//   console.log(count);
// }

// // backwards for loop
// for(let count = 10; count >= 0; count--){
//   console.log(count);
// }

//? LOOPING THROUGH AN ARRAY

function relativeLoop() {
  const familyArray = ['Doreen', 'Simon', 'Donna', 'Matt', 'Morgan'];
  for (let i = 0; i < familyArray.length; i++) {
    console.log(`My family members name is ${familyArray[i]}`);
  }
}
relativeLoop();

//? NESTED FOR LOOPS - comparing elements in two arrays and pushing the identical elements to a new array
// inner loop will run al its iterations for each iteration in the outer loop

const colourArray = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Pink', 'Purple'];
const shadeArray = ['Grey', 'Green', 'Cream', 'Pink', 'Purple'];
const emptArr = [];

/* if the comparion find the same elements in both arrays, 
this code pushes those identical two elements to the emptArr array */

for (let c = 0; c < colourArray.length; c++) {
  for (let s = 0; s < shadeArray.length; s++) {
    if (colourArray[c] === shadeArray[s]) {
      emptArr.push(colourArray[c]);
      console.log(emptArr);
    }
  }
}

//? DO...WHILE STATEMENTS
// when you want to run your code at least once
// to do a task once and then keep doing it until a specified condition is met
// only checking the stopping condition after the first execution

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded + ' cup of sugar was added to the mix'); // prints 3 strings with values to the console
} while (cupsAdded < cupsOfSugarNeeded)

//? BREAK keyword
// stops a loop from continuing even before the stopping condition is met
// useful for looping through large data structures

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]); // prints all elements in the array
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  } // conditional statement to break the loop if the element at the current index is the specified element.
}
console.log("And if you don't know, now you know.");


// ! ITERATORS - ABSTRACTION IN PROGRAMMING
// allows you to write more modular code that is easier to read and de-bug 

//? Functions as Data
const reallyLongFunctionNameWithSomeFunctionality = () => {
  return 'some code';
}
// assigning a function identifier as value to a variable, this is particularly handy for unneccessarily long identifiers.
// this limits the amount of space needed for naming an identifier which can slow down a programme when the function is invoked.
const newFunction = reallyLongFunctionNameWithSomeFunctionality;

newFunction(); // invoking that function by using parentheses with the variable name that holds the function
console.log(newFunction.name); // using the name property for example, this will print out the original identifier assigned to the function.

//? WHILE LOOP - while a condition is true execute some code
// the while loop creates a loop that is executed as long as a specified condition evaluates to true.
// this will continue to run until the condition evaluates to false

function incrementWord() {
  let text = "";
  let i = 0;
  while (i < 10) {
    text ||"<br>The number is " + i;
    i++;
  }
}
incrementWord();

//? Functions as parameters - higher order functions
// A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

function addTwo(num) {
  return num + 2;
}

// a higher order function that adds to to an argument, in this case the argument is 10.
const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  } else {
    return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 10)); // passing in the addTwo function as an argument

const divideTwo = num => {
  return num / 2;
}

const highFunc = (func, val) => {
  const valA = val / 2;
  const valB = func(val);
  if(valA === valB){
    return valB;
  } else {
    return 'No value';
  }
}

console.log(highFunc(divideTwo, 10));

//! ITERATORS - ABSTRACTION IN PROGRAMMING - ITERATION METHODS
// allows you to write more modular code that is easier to read and de-bug

//? .forEach() METHOD - for each element you want to execute a function to return a string for each element

const dogArray = ['Retriver', 'Cocker', 'Pug', 'French Bulldog', 'Great Dane'];
dogArray.forEach(function (dog) {
  console.log(`I own a ${dog}`);
})

//? .map() METHOD - takes an argument of a callback function and returns a new array
// similar to .forEach() method but instead it returns a new array

const evens = [2, 4, 6, 8, 10, 12, 14];
const doubleNum = evens.map(function (num) {
  console.log(`The new numbers are ${num * 2}`)
})

//? .filter() METHOD - returns an array of filtered elements

// create an array and filter all names that are not equal to 'Paul'

const men = ['Steve', 'John', 'Chris', 'Paul', 'Johnny'];
const blokes = men.filter(function(male) {
  return male != 'Paul';
})
console.log(blokes);


// filter through an array and return all words that have less that 6 characters
const stuff = ['Bottle', 'Mouse', 'Chair', 'Ceiling', 'Trousers', 'Deodarent'];
const belongings = stuff.filter(function(result){
  return result.length < 6;
})
console.log(belongings);

//? .findIndex() METHOD - return the index of the first element that evaluates to true in the callback function.

const nature = ['Birds', 'Grass', 'Trees', 'Lake', 'Clouds'];
const goodbye = nature.findIndex(function(update){
  return update === 'Trees';
})
console.log(goodbye);

// finding the index of the element that begins with s
const clothes = ['Jeans', 'Tshirt', 'Shoes', 'Belt', 'Pants'];
const outfit = clothes.findIndex(function(yo) {
  return yo[0] === 'S';
})

console.log(outfit);

//? .reduce() METHOD - reduces to a single value
// returns a single value after iterating through the elements in an array
// takes two parameters:
  // the first parameter starts off as the value for the first element (1)
  // the second parameter starts as the second element
  // as the iteration progresses the first parameter becomes the value from the previous addition and the second becomes takes on the value for the current element in the looping process so ...

const digits = [2, 4, 6, 8];
const acc = digits.reduce((accumulator, currentValue) => {
  console.log('The new values are ', accumulator);
  return accumulator * currentValue;
})
console.log(acc);

  // 1(cv)
  // 1(acc) + 3(cv) = 4 
  // 4(acc) + 5(cv) = 9
  // 9(acc) + 7(cv) = 16

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// .some() method returns true if some words in the array are less that 6 characters
console.log(words.some((letter) => {
  return letter.length < 6;
}))


// .every() method returns true if every element in the array has more than 10 characters
const wordss = ['hhhhhhhhhh', 'gggggggg', 'hh', 'yyyyy', 'jsj'];
const erm = wordss.every((val) => {
  return val.length > 10;
})
console.log(erm);


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];


//  declaring a variable and assigning the forEach method will return undefined
const test = cities.forEach(city => console.log('Have you visited ' + city + '?'));
console.log(test);


// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);
console.log(longCities);





















