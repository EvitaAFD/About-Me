'use strict';

// count var combined with c++ in questions counts userAnswer
var count = 0;

var userAnswer = confirm('Are you ready?!');

if (userAnswer) {
  console.log('User is ready!');
} else {
  console.log('That\'s sad, user not ready');
}

var userName = prompt('Before we begin please tell me your name!');

console.log('The user\'s name is: ' + userName);

alert('Hello ' + userName + ' I am going to ask you some questions so you can get to know me. Good luck!');

function quest1Func() {
  var question1 = prompt('These are all yes or no questions, please enter Yes or No, or Y or N. Does Eve believe that green chile can fix anything?').toUpperCase();

  count++;
  console.log('The user answered: ' + question1 + ' to question 1');

  if (question1 === 'Y' || question1 === 'YES') {
    alert('Good job! Green chile is like duct tape!');
  } else {
    alert('You must not know her very well!');
  }
}
quest1Func();

function quest2Func() {
var question2 = prompt('Question 2! Did Eve trade a Subaru WRX in for a Prius?').toUpperCase();

count++;
console.log('The user answered: ' + question2 + ' to question 2');

if (question2 === 'Y' || question2 === 'YES') {
  alert('You are correct! She cried when she turned over the keys!');
} else {
  alert('Better luck next time, it was a sad day when she sold it! Being an adult is hard.');
}
}
quest2Func();

function quest3Func() {
var question3 = prompt('Question 3! Does Eve love squirrels?').toUpperCase();

count++;
console.log('The user answered: ' + question3 + ' to question 3');

if (question3 === 'Y' || question3 === 'YES') {
  alert('No! She thinks they are hilarious but does not love them, and does not want squirrel things as gifts');
} else {
  alert('Good job! Squirrels can be jerks.');
}
}
quest3Func();

function quest4Func() {
var question4 = prompt('Question 4! Did Eve create a greeting card series called \'Squirrels Gone Wild?\'').toUpperCase();

count++;
console.log('The user answered: ' + question4 + ' to question 4');

if(question4 === 'Y' || question4 === 'YES') {
  alert('So she doesn\'t love squirrels but they are fun to draw, yay art school!');
} else {
  alert('Wrong, she did, I know, she\'s weird.');
}
}
quest4Func();

function quest5Func() {
var question5 = prompt('Question 5! Is Eve\'s boyfriend a professional Auguste clown?').toUpperCase();

count++;
console.log('The user answered: ' + question5 + ' to question 5');

if(question5 === 'Y' || question5 === 'YES'){
  alert('No way! Clowns are horrifying! Have you seen the news?!');
} else {
  alert('You\'re right he is not a clown! He is a master mixolgist and can do molecular mixology, still strange but super cool!');
}
}
quest5Func();

function quest6Func() {
var a = 0;  //number of times to run through loop
var b = 3;  //number of attempts

while (a < 4){
// convert string to integer using parseInt in prompt
  var question6 = parseInt(prompt ('I want you to guess something about me!  How many dogs do I have? Please enter the number of dogs you think I have using 0-10.  You have four chances!'));

  if(question6 === 2) {
    alert('You are correct ' + userName + ' great guess!');
    a = 5;
    //a = 5 closes the loop because user got the answer correctly
  } else if(question6 < 2) {
    alert('Not quite! Your\'e answer is too low! You have ' + b + ' more chances! Try again: ');
    b--;
    //b-- decrements by 1 so b is now one less chance to guess
  } else {
    alert('Too many dogs, too high! I love them but I have an apartment not a farm! You have ' + b + ' more chances. Try again');
    b--;
  }
  count++;
  console.log('The user answered ' + question6 + ' to question 6');
  a++;
  //a++ increments the a variable number of attempts to close the loop when they hit 4 attempts
}
}
quest6Func();

function quest7Func() {
var states = ['arizona', 'new mexico', 'california', 'kansas'];

for(var index = 0; index < 6; index++) {
  var question7 = prompt('Can you list a state that I have lived in other than Washington? You have 6 chances to guess correctly.  If you guess incorrectly this box will pop open again and give you another chance. Good luck!').toLowerCase();
  count++;

  console.log(index);

  for(var c = 0; c < states.length; c++) {
    console.log(states[c] + ' inside second for loop');
    console.log(states + [c]);
    if(question7 === states[c]){
      console.log(states[c]);
      alert('The options were Arizona, New Mexico, California, and Kansas, if you answered any of these, you are amazing!  Otherwise, learn how to pay attention!');
      index = 6;
    }
  }
}
}
quest7Func();
// bellow logs number of answers user got correct and alerts them
alert(userName + ' you answered ' + count + ' questions correctly!');
console.log('User got this number of correct answers' + count);
