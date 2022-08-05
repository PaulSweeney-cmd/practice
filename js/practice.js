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
console.log(newFunction.name); // using the name property for example, this will print out the original identifier assig to the function.

//? Functions as parameters - higher order functions
// A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

const addTwo = num => {
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

//! ITERATORS - ABSTRACTION IN PROGRAMMING - ITERATION METHODS
// allows you to write more modular code that is easier to read and de-bug

//? .forEach() METHOD - for each element you want to execute a function to return a result

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// iterates through each array element and executes the callback function and returns a string with each element
fruits.forEach(function(fruitItem){
  console.log('I want to eat a ' + fruitItem);
});


//? .map() METHOD - takes an argument of a callback function and returns a new array
// similar to .forEach() method but instead it returns a new array

const numbers = [1, 2, 3, 4, 5]; 

// iterates through each array element and pass the element in to the callback function to return a new array
const bigNumbers = numbers.map(number => {
  console.log(number * 10); // multiplies each array element by 10
});

//? .filter() METHOD - returns an array of elements after filtering out certain elements from the original array

// using method to return each number that is less than 250 to a new array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})
console.log(smallNumbers);

// using method to return each element that has more than 7 characters to a new array
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(sevenPlus => {
  if (sevenPlus.length > 7) {
    return sevenPlus;
  }
})
console.log(longFavoriteWords);

//? .findIndex() METHOD - return the index of the first element that evaluates to true in the callback function.

// finding the index position of Birmingham
const cityCheck = ['Lincoln', 'Manchester', 'Birmingham', 'Edinburgh'];
const findCity = cityCheck.findIndex(city => {
  return city === 'Birmingham';
})
console.log(findCity); // returns the index of 2

// finding the index of the first element that starts with 's'
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const startsWithS = animals.findIndex(start => {
  return start[0] === 's';
})
console.log(startsWithS); // returns an index of 3

//? .reduce() METHOD
// returns a single value after iterating through the elements in an array
// takes two parameters:
  // the first parameter starts off as the value for the first element (1)
  // the second parameter starts as the second element
  // as the iteration progresses the first parameter becomes the value from the previous addition and the second becomes takes on the value for the current element in the looping process so ...

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumilator is: ', accumulator);
  return accumulator + currentValue;
});
  // 1(cv)
  // 1(acc) + 3(cv) = 4 
  // 4(acc) + 5(cv) = 9
  // 9(acc) + 7(cv) = 16

console.log(newSum); 
/*{
  The value of accumilator is:  1
  The value of accumilator is:  4
  The value of accumilator is:  9
  16
}*/


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// .some() method returns true if some words in the array are less that 6 characters
console.log(words.some((word) => {
  return word.length < 6;
}));

// filters through the array and returns all elements that have more than 5 characters
const interestingWords = words.filter((word) => {
  return word.length > 5;
})
console.log(interestingWords);

// .every() method returns true if every element in the array has more than 5 characters
console.log(interestingWords.every((word) => {
  return word.length > 5;
}));


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);





















