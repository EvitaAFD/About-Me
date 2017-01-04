'use strict';

var userAnswer = confirm('Are you ready?!');

if (userAnswer) {
  console.log('User is ready!');
} else {
  console.log('That\'s sad, user not ready');
}

alert('I am going to ask you questions about me. Good luck!');

var question1 = prompt('These are all yes or no question, please enter Yes or No, or Y or N. Does Eve believe that green chile can fix anything?').toUpperCase();

console.log('The user answered: ' + question1 + ' to question 1');

if (question1 === 'Y' || question1 === 'YES') {
  alert('Good job! Green chile is like duct tape!');
} else {
  alert('You must not know her very well!');
}

var question2 = prompt('Question 2! Did Eve trade a Subaru WRX in for a Prius?').toUpperCase();

console.log('The user answered: ' + question2 + ' to question 2');

if (question2 === 'Y' || question2 === 'YES') {
  alert('You are correct! She cried when she turned over the keys!');
} else {
  alert('Better luck next time, she loved that car!');
}

var question3 = prompt('Question 3! Does Eve love squirrels?').toUpperCase();

console.log('The user answered: ' + question3 + ' to question3');

if (question3 === 'Y' || question3 === 'YES') {
  alert('No! She thinks they are hilarious but does not love them, and does not want squirrel things as gifts');
} else {
  alert('Good job! Squirrels can be jerks');
}

var question4 = prompt('Question 4! Did Eve create a greeting card series called \'Squirrels Gone Wild?\'').toUpperCase();

console.log('The user answered: ' + question4 + ' to question 4');

if(question4 === 'Y' || question4 === 'YES') {
  alert('So she doesn\'t love squirrels but they are fun to draw, yay art school!');
} else {
  alert('I know, she is weird.');
}

var question5 = prompt('Question 5! Is Eve\'s boyfriend a professional Auguste clown?').toUpperCase();

console.log('The user answered: ' + question5 + ' to question 5');

if(question5 === 'Y' || question5 === 'YES'){
  alert('No way! Clowns are horrifying! Have you seen the news?!');
} else {
  alert('You\'re right! He is a master mixolgist and can do molecular mixology, still strange but super cool!');
}
