// // //! Built in objects
// // console.log(Math.random()  * 200); // generates a number between 0 & 1, this can be bigger if you multiply by another number
// // console.log(Math.floor(Math.random() * 200)); // rounds the number down to the nearest whole number
// // console.log(Math.ceil(44.5)); // returns the smallest number greater than or equal to the decimal number
// // console.log(Number.isInteger(22)); // determines if a given number is an integer and returns true if so, passing in a floating point number would return false

// function getMathNumber(max){
//   return Math.random() * max;
// }
// console.log(getMathNumber(3));

// // //! Demonstrating length property
// let example = 'This is a string';
// let exampleResult = example.length; // length property determines how many characters are in the string
// console.log(exampleResult);

// // //! string interpolation - using template literals to pass variables to strings
// let string = 'string';
// function getString(){
//   return `This is an example of ${string} interpolation`;
// }
// // console.log(getString());

// // //! CONDITIONAL STATEMENTS or 'binary decisions' */
// // you can't re-assign a value to a variable in it's block scope, the result would be no output
// // if/else statements
// // logical operators: > < >= <= !== ===
// // && to check two conditions both of which should be true
// // || OR OPERATOR, ! NOT (OR BANG) OPERATOR to check that one or the other condition must evaluate to true

// // //! THE 5 FALSY VALUES */
// // 0
// // "" or ''
// // null
// // undefined
// // NaN

// let car = 'Ford';
// let model = 'Mustang';
// let color = 'Yellow';
// let mileage = 255;
// let year;

// // checking the conditions NOT values in else if statements
// if(car === 'Pontiac' && model === 'Express') {
//   console.log('Correct');
// } else if ( color === 'red' || mileage != 255) {
//   console.log('This is also correct');
// } else if (mileage === 255 && car === 'Ford') {
//   console.log(`${year || 1989} is the year this particular car was made.`);
// }

// let number1 = 5;
// let number2 = 10;
// let number3 = 15;
// let number4 = 20;

// if(number1 !== 5 || number2 < 10) {
//   console.log('This is the correct number');
// } else if(number3 < 10 && number4 >= 20) {
//   console.log('This is also the correct number');
// } else if(number1 !== 5 && number2 !== 10) {
//   console.log('All numbers are invalid');
// } else if (number3 < 8 || number4 >= 22) {
//   console.log('Complete');
// } else {
//   console.log('Completed');
// }

// //! Switch/Case statements

// let number = 2022;

// // checking for the correct value NOT the condition
// switch(number) {
//   case 2021:
//     console.log(`${number} is not the correct year here`);
//     break;
//   case 2023:
//     console.log(`${number} is not the correct year here`);
//     break;
//   case 2025:
//     console.log(`${number} is not the correct year here`);
//     break;
//   case 2026:
//     console.log('This is the correct year');
//     break;
//   default:
//     console.log("the end is near!");
// }

// //! Short Circuit evaluations

// let emptyString = '';
// let updateString = emptyString || "Updated";
// console.log(updateString);

// // assigning new object data using short circuit evaluation
// var person = {
//   name: 'Jack',
//   age: 33,
//   race: ''
// }

// function raceInput(){
//   var person = {
//     name: 'Jack',
//     age: 33,
//     race: ''
//   }
//   return `${person.name} is ${person.age} years old and is considered to be ${person.race || 'White/British'}`
// }
// console.log(raceInput());

// //! Ternary Operators - a short hand if/else statement

// let firstName = 'Steve';
// firstName === 'Paul' ? console.log(`${firstName} is correct`) : console.log(`The correct name is ${firstName}`);

// // //! Functions - parameters and arguments
// // A function is created by  assigning an identifier to it just like you would assign an identifier to an variable
// // Functions can be called as many times as you like
// // If you declare a variable inside a function that variable is then part of the function scope
// // Declaring a function will not execute the code, it simply exists, to execute a function it needs to be called

// // using a parameter in a function, the parameter acts as a variable which can then be updated with a value to produce a personalised message in this code example
// function sayThanks(name) {
//   console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
// }

// sayThanks('Cole'); // the function is called, the argument is then updated with a value

// // using parameters and arguments to perform an arithmatic caluculation:
// function monitorCount(rows, columns) {
//   return rows * columns;
// }

// const numOfMonitors = monitorCount(5, 4);
// console.log(numOfMonitors);

// // //! Functions - default parameters
// // default parameters can be useful when an argument isnt passed in to a function that's expecting an argument
// // adding a default parameter is useful if you dont have a pre-determined value for an argument
// function greeting(name = 'Default argument') {
//   console.log(`Hello ${name}`);
// }

// greeting();
// // This argument can be updated as follows:
// greeting('Paul');

// // //! Helper functions - return a value of a function inside of another function
// // using helper functions breaks down long code so it's easier to debug
// function monitorCount(rows, columns) {
//   return rows * columns;
// } // calculating the amount of monitors

// function costOfMonitors(rows, columns) {
//   return monitorCount(rows, columns) * 200;
// } // passing that calculation down to multiply the amount of monitors by 200

// const totalCost = costOfMonitors(5, 4); // passing in two arguments for rows and columns which wil then get multiplied by 200 -  so 5 * 4 * 200
// console.log(totalCost);

// // //! Function expressions - creating a variable and assigning an anonymous function to perform a task
// // uses anonymous functions instead of declared functions
// const functionExpression = function(param1, param2) {
//   const result = param1 * param2;
//   return result;
// };
// console.log(functionExpression(5, 4));

// const plantNeedsWater = function(day) {
//   if(day === 'Wednesday') {
//     return `The plant needs watering on a ${day}`;
//   } else {
//     return false;
//   }
// }
// console.log(plantNeedsWater('Tuesday'));

// // //! Arrow functions or 'Fat Arrows' an ES6 introduction- a shorthand way to write a function () => {}
// // can take patameters but dont need to include them, you would simply use empty parentheses
// const usingArrowFunction = (param1, param2) => {
//   return param1 + param2;
// }
// console.log(usingArrowFunction(5, 4));

// // //! Concise body arrow function - a brief but comprehensive arrow function or 'single line' body arrow function
// // concise body arrow function can only take one parameter

// const concArrFunc = param => param * param;
// console.log(concArrFunc(2)); // a single argument for the single parameter

// // performing a conditional statement using a ternary operator
// const waterThePlant = day => day === 'Wednesday' ? `The plant needs watering on ${day}` : false;
// console.log(waterThePlant('Wednesday'));

// // //! SCOPE
// // //? GLOBAL SCOPE - defining variables outside of a block of code so they can be used insidwe a block // USED ANYWHERE
// // //? BLOCK SCOPE - if or switch conditions or inside for or while loops, are accessible within that particular condition or loop
// // //? FUNCTION SCOPE - declared inside functions and are only accessible within the function and cannot be used outside of that function

// // GLOBAL SCOPE
// let satellite = 'The Moon';
// let galaxy = 'The Milky Way';
// let stars = 'North Star';

// function callMyNightSky() {
//   return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// }

// console.log(callMyNightSky());

// // FUNCTION SCOPE
// function logVisibleLightWaves() {
//   const lightWaves = 'Moonlight';
//   console.log(lightWaves);
// }

// logVisibleLightWaves();
// console.log(lightWaves); // this will produce a console error as the variable was declared inside of the block

// // //? SCOPE POLLUTION - declaring too many global variables in the global namespace that can be used a number of times across the program and have their values reassigned
// // try to avoid declaring global variables alltogether

// // //? GOOD SCOPE PRACTICE
// // try to delcare all your variables inside of the block of code you wish to execute using them in

// const logVisibleLightWaves = () => {
//   let lightWaves = "Moonlight";
//   let region = "The Arctic";

//   // BLOCK SCOPE
//   if (region === "The Arctic") {
//     let lightWaves = "Northern Lights"; // updating the variable if the condition is true
//     console.log(lightWaves);
//   }
//   console.log(lightWaves); // otherwise the original value prints to the console
// };

// logVisibleLightWaves();

//! ARRAYS - array literal
// arrays contain elements of data, these can be any data type you want.

const newArray = ['elementOne', 'elementTwo', 'elementThree'];
const newResult = newArray[1]; //* bracket notation to get the first elements from the array
console.log(newResult);
console.log(newArray[2]);

// //* Updating an array element
const updateArr = ['elementOne', 'elementTwo', 'elementThree'];
updateArr[1] = ('updated element');
console.log(updateArr);

// //? ARRAYS with let or const
// you can change the elements in an array declard with const as these elements remin mutable, you cannot assign a new array with different elements though
// using () to assign a new element is best practice as the programme then knows you're not assigning a new array
// each elements inside of an array is stored as an index starting at 0
// they have their own methods like push, pull, shift, unshift

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo"; // updates the first element
console.log(condiments);

condiments = ["Mayo"]; // assigns a new array
console.log(condiments);

utensils[3] = "Spoon"; // updates the 3rd element
console.log(utensils);

// //? ARRAYS - push() - adding items to the end of the array

let places = ['Lincoln', 'London', 'Leicester', 'Manchester'];
let addPlaces = places.push('Birmingham');
console.log(addPlaces);

// //? ARRAYS - pop() - removing the last item from an array
//* Doesn't need parameters
let removePlace = ['Lincoln', 'London', 'Leicester', 'Manchester'];
let updatePlaces = removePlace.pop();
console.log(removePlace);
console.log(updatePlaces);

// //? ARRAYS - unshift() - adding the first item from an array
//* Doesn't need parameters
let food = ['milk', 'bread', 'sugar', 'teabags', 'coffee'];
let addShopping = food.unshift('washing powder');
console.log(food);
console.log(addShopping);

// //? ARRAYS - shift() - removing the first item from an array
//* Doesn't need parameters
let cars = ['Ford', 'Peugeot', 'Fiat', 'MG', 'Mazda'];
let updateCars = cars.shift();
console.log(cars);
console.log(updateCars);

// //? ARRAYS - slice() - returning a new array with your chosen elements
//* use indexing to select elements, remembering to make sure you use the next index up to the last element you want

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let daysWorked = days.slice(0, 5); // this would return Monday to Friday
console.log(days);
console.log(daysWorked);

// //? ARRAYS - indexOf() - finding the index value of an element
let daysIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let daysHoliday = daysIndex.indexOf('Wednesday');
console.log(daysHoliday); // logs 2 to the console

//? ARRAYS and FUNCTIONS
//* create an array and create a function to update the last element to another value

const languages = ['Javascript', 'HTML', 'CSS', 'React'];
// creating a function with a parameter and using bracket notation to update the last element
function changeLanguage(lang) {
  lang[3] = 'Python';
};
// passing in the languages array to the function so the element will update
changeLanguage(languages);
// logging the updated array to the console
console.log(languages);

// //? NESTED ARRAYS - storing an array inside of another array
// use bracket notation to access certain elements inside of a nested array

let colour = [['red', 'blue'], ['orange' + ' &' + ' green'], ['pink', 'purple']];
const accessColours = colour[1][1];
console.log(accessColours); // prints out 'green'

// adding more elements to a nested array
let update = [['red', 'blue'], ['orange', 'green'], ['pink', 'purple']];
update[2].push('black', 'white'); //* [ 'pink', 'purple', 'black', 'white' ]
update.push(['grey', 'yellow']);
console.log(update);

// //! FOR LOOPS - loops through until a stopping condition is met
// iterator variable that appears in 3 expressions, iteration statement is used to update the iterator variable on each loop
for(let count = 5; count < 11; count++) {
  console.log(count);
}
// 1 - initialization (where to begin the loop) expression is the first expression to start the counter at 5
// 2 - stopping condition - loop runs as long as the number is between 5 and 10
// 3 - iteration statement (repeat) - value of each counter increases by 1, updatesd the iterator each time the loop is completed

//--------

// //? BACKWARDS FOR LOOP - decrementing a value until a condition is met
// works the same as a for loop
// simply starts the counter at 3 and decreses by using the decrement operator in your iteration statement
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

//? LOOPING THROUGH AN ARRAY
// using the .length property is helpful for looping through an array as the length can be used for the stopping condition
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`); // passes in each array element to a string with string interpolation
}

//? NESTED FOR LOOPS - comparing elements in two arrays
// inner loop will run al its iterations for each iteration in the outer loop
let bobsFollowers = ['John', 'Alice', 'Steve', 'Tom'];
let tinasFollowers = ['Alice', 'Chris', 'Tom'];
let mutualFollowers = [];

/* if the comparion find the same elements in both arrays, 
this code pushes those identical two elements to the mutualFollowers array */
for (let b = 0; b < bobsFollowers.length; b++) {
  for (let t = 0; t < tinasFollowers.length; t++) {
    if (bobsFollowers[b] === tinasFollowers[t]) {
      mutualFollowers.push(tinasFollowers[t])
      console.log(mutualFollowers);
    }
  }
}

//? WHILE LOOP
// the while loop creates a loop that is executed as long as a specified condition evaluates to true.
// this will continue to run until the condition evaluates to false

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)]; // using Math.floor & Math.random to generate and number from 0 to 3 and assigns a random element from the cards array
  console.log(currentCard);
}

//? DO...WHILE STATEMENTS - do a calulation etc while a number is less than another number (for example)
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

























