// create a conditional statement using logiccal and comparison operators with block scope variables

function addSum() {
  const num = 33;
  const str = 'A string';

  if(num === 33 || str != 'A string') {
    return 'This is correct';
  } else {
    return 'This is incorrect'; // this code block runs because both conditions are false
  }
}
console.log(addSum());

// Ternary Operator

const one = 55;

const two = one ? addSum() : console.log('Incorrect'); // checks for a truthy value and executes the function
console.log(two);

// else if

if (one === 44) {
  console.log('Nope');
} else if (one === 'A string') {
  console.log('Nope');
} else if (one === 55) {
  addSum();
} else {
  console.log('default');
}

// switch case

function printString(str1) {
  const result = str1;
  return result;
};

function result() {

  const switchOne = 100;
  switch(switchOne){
    case 100:
      return 'one';
    case 300:
      return 'two';
    case 100:
      return printString('The function worked');
    default:
      return 'three';
  }
}

console.log(result());



