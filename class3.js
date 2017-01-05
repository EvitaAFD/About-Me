'use strict';

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
