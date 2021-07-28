
'use strict';

let counter = 0;

let helloMsg = prompt('Welcom to guessing-game. Colud you write your name please!!');

let message = alert('Before we get start the user name is: ' + helloMsg);
let play = confirm('do you enjoy to play numerical puzzel!!');
console.log(play);
function subtractMath() {
  let subtract = prompt('does Subtract 869 from 2482 equal 1613').toLocaleLowerCase();

  switch (subtract) {
    case 'yes':
    case 'y':
      alert('that is right, let move to the snd question');
      console.log(subtract)
      counter++;
      break;

    case 'no':
    case 'n':
      alert('try another question');

  }
}
subtractMath();

function dividedMath() {
  let divided = prompt('is divided 1000 by 16 equal 50.5').toLocaleLowerCase();
  /*if (divided = 'no') {
    alert('you are good in math so let take another question');
    counter++;
    console.log(divided); 
  }
  else {
    alert('unfortuntely,that is wrong');
  break;
  }*/
  switch (divided) {
    case 'no':
    case 'n':
      alert('you are good in math so let take other question');
      console.log(divided)
      counter++;
      break;

    case 'yes':
    case 'y':
      alert('unfortuntely,that is wrong');
  }
}
dividedMath();

function sequnceMath() {
  let sequnce = prompt('to complete this sequnce 1, 1, 2, 3, X , 8, 13 the value of X should 5 ').toLocaleLowerCase();
  switch (sequnce) {
    case 'yes':
    case 'y':
      alert('An awesome this hard question but you solve it..lets go')
      console.log(sequnce);
      counter++;
      break;

    case 'no':
    case 'n':
      alert('Dont worry,try last one');
      break;

  }
}
sequnceMath();

function averageMath() {
  let average = prompt('the mean average of 3, 15, 8 and 22 is 14 ').toLocaleLowerCase();
  /*if (average = 'no') {
    alert('very very good');
    console.log(average);
    counter++;
  
  } else if (average = 'yes') {
    alert('Good luck');
    break;
  }*/
  switch (average) {
    case 'no':
    case 'n':
      alert('very very good')
      console.log(average);
      counter++;
      break;

    case 'yes':
    case 'y':
      alert('Good Luck');
      break;

  }
}
averageMath();

alert('Thanks for your visit ' + helloMsg + ' Now!! after you answer numerical puzzel let us check Your knowledge of geography');

function nileLength() {
  //the nile river/Length 6,650 km
  for (let i = 0; i < 4; i++) {
    let lengthRiver = prompt('the Nile river/Length is :');
    console.log(lengthRiver);
    if (lengthRiver < 6650) { alert('too low') }

    else if (lengthRiver > 6650) { alert('too high') }

    else {
      if (lengthRiver == 6650) {
        alert('this is right answer ^_^' + 'The Nile River Lenght ' + lengthRiver)
        counter++;
      }
      break;
    }

  }
  alert('The Nile River lenght is 6650 km')
}
nileLength();

function theLongest() {
  let longestRivers = ['Nile', 'Amazone', 'Yangtze', 'Mississippi', 'Yenisei'];
  for (let i = 0; i < 6; i++) {
    let river = prompt('can you guess What is the longest rivers in the world !!').toLocaleLowerCase();
    console.log(river);

    for (let x; i < longestRivers.length; x++) {
      if (river = longestRivers[i]) { alert('that is far, try again') }
      else if (river == longestRivers[i]) {
        alert('this correct answer one og hte longest river in the world is ' + longestRiver[i])
        counter++;
      }
      break;
    }
  }
}
theLongest();

console.log(counter);
alert('The five longest rivers in the wolrd are Nile ,Amazon, Yangtze,Mississippi and Yenisei')
alert('your Result is ' + counter);

let longestRiver = ["Nile", "Amazon", "Mississippi", "Yenisei"];
longestRiver.join(" and ");
for (i = 0; i < 4; i++) {
  console.log(longestRiver[i]);
}


/* Work from collections of like data: 
Create 3 arrays, one for each of: your questions, the correct answers,
and the two possible responses. (The same applies if you’ve added in any other 
  pieces to the questions besides the most basic structure.) 
Replace that content in the functions by accessing the arrays.

let array_of_functions = [
  sequnceMath(),
  dividedMath(),
  averageMath(),
  sequnceMath()
]*/



//----------------------------------------------------------------//
/*Make it DRY: Reduce the yes/no questions from five functions 
to one function, and then use a ‘for’ loop to iterate through the arrays and 
call the function for each question.


var yesNo = [ subtract, divided, average , sequnce]; 

function call_me(params) {
  for (i=0; i<params.length; i++) {
    alert(params[i])
  }
  return params;
}

call_me();*/
