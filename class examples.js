// 'use strict'; must always be at the top of js doc, boilerplate

//     Do/While loop

var index = 10;

do {         //do this one thing at least once no matter what
  console.log('Do-while loop fired with index: ', index);
} while (index > 100);           //then do this

if(name === 'Eve'){
  var name = 'Eve';
  console.log('Yes! My name is ' + name);
}

console.log('Names is: ' + name);

//      For loop
for(var index = 100; index >= 10; index--){}     //to decrement follow bellow

for(var index = 0; index <= 10; index ++){      //to increment
  console.log('The index is: ', index);
}

//      While Loops

var index = 100;

while(index > 0) {    //this makes it start after 0, not inclusive
  console.log('the index of while loop is', index);
 index--;        //stops this from infinite looping
}

//FUNCTIONS
// would use the bellow to
function sayHello(){
  Console.log('Hey everyone!');
}
sayHello //calls this FUNCTIONS

function addTwoThings(numberOne, numberTwo){ //numberOne and numberTwo are the parameters and will be passed into this function
  return numberOne + numberTwo; //creates output of two parameters
}
console.log(addTwoThings(10, 100)); //logs what addTwoThings calculated 10, 100 are the arguments
colsole.log(addTwoTnings('hello', 'you')); // would concatenates the two strings

var subtractTwoValues = 
