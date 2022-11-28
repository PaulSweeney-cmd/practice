var myArray = ["What is the meaning of life?", 42, true];
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

//////////////////////////////

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

// removes variables in the order they were inserted
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());

//////////////////////////////

// array(5)
var myArray = [1,2,3,4];
myArray.unshift(0); // adds 0 to the start of the array
console.log(myArray);

//////////////////////////////

// array(6)
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3, 6);
console.log(splice);
console.log(myArray);

//////////////////////////////

var myArray = [true, "What is the meaning of life?"];
myArray.push(42);
myArray.shift();
console.log(myArray[0])
console.log(myArray[1])

//////////////////////////////

var firstName = "John";
var lastName = "Smith";
var myNumber = 21;

var fullName = firstName + " " + lastName;
var meaningOfLife = myNumber *= 2;

console.log("The name is " + fullName);
console.log("The meaning of life is " + meaningOfLife);

//////////////////////////////

var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}

//////////////////////////////

function checkNumber(myNumber)
{
    if(myNumber == 42){
      console.log("correct");
    } else{
      console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);

//////////////////////////////

var myArray = ["What is the meaning of life?", "The meaning of life is", 42];
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

//////////////////////////////

var person = {
  firstName: "Jack",
  lastName: "Smith",
  age: 19,
  salary: 23000
}

for (var member in person){
  if (person.hasOwnProperty(member)){
    console.log("The " + member + " of employee is " + person[member])
  }
}

//////////////////////////////

function multiplyFive(number){
  return number *= 5;
}

// multiplies each number by 5 in the conmsole
console.log(multiplyFive(3));
console.log(multiplyFive(4));
console.log(multiplyFive(5));
console.log(multiplyFive(6));

//////////////////////////////

function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    console.log(sentence)
}
useCallback(callback)

//////////////////////////////

// TODO: define the function divideByTwo here using an arrow function
const divideByTwo = number => {
  return number / 2
}

console.log(divideByTwo(4));
console.log(divideByTwo(8));
console.log(divideByTwo(12));
console.log(divideByTwo(6));

//********************************

function sumAsync(x, y) {
  const calculateSum = new Promise((resolve, reject) => {
      // this resolves the promise we just created with the output of x+y
      resolve(x + y);                        
  });

  // This returns the promise, not the value
  return calculateSum;
}

// let's use the function now
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
});

//********************************

function sumAsync(x, y) {
  return new Promise((resolve, reject) => {
      // run this in 500ms from now
      setTimeout(() => {
          if (x < 0 || y < 0) {
              reject("Negative values received");
          } else {
              resolve(x + y);
          }
      }, 500);

      // we don't need to return anything
  });
}

sumAsync(-5, 7).then((result) => {
  console.log("The result of the addition is:", result);
}).catch((error) => {
  console.log("Error received:", error);
});

//********************************

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
  await sleep(500);
  return s.toUpperCase();
}

uppercaseString("edward").then(console.log);

//********************************

var Person = function(name, age){
  this.name = name;
  this.age = age;
  this.describe = function(){
      return this.name + ", " + this.age + " years old"
  }
}

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());

//********************************

// TODO: create the Person class using a function
var Person = function(name, age){
  this.name=name;
  this.age=age;
  this.describe = function(){
      return this.name + ", " + this.age + " years old";
  }
}
var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());















