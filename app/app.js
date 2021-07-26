
'use strict';


let helloMsg = prompt('Welcom to guessing-game. Colud you write your name please!!');

let message = alert('Before we get start the user name is:' + helloMsg);
let play = confirm('do you enjoy to play numirce puzzel!!');
console.log(play);

let subtract = prompt ('does Subtract 869 from 2482 equal 1613').toLocaleLowerCase();

switch (subtract) {
  case 'yes':
    alert('that is right, let move to the snd question');
    console.log(subtract)
    break;

  case 'no':
   alert('try another question');
  
}

let divided = prompt ('is divided 1000 by 16 equal 50.5').toLocaleLowerCase();
if(divided = 'no'){
  alert('you are good in math so let take another question');
  console.log(divided);
}
else
{ alert('unfortuntely,that is wrong');

}

let sequnce = prompt('to complete this sequnce 1, 1, 2, 3, X , 8, 13 the value of X should 5 ').toLocaleLowerCase();
switch(sequnce){
  case 'yes':
    alert('an awseom this hard question but you solve it..lets go')
    console.log(sequnce);
    break;
  
  case 'no':
    alert('Dont worry,try last one');

    break;

}

let average =prompt('the mean average of 3, 15, 8 and 22 is 14 ').toLocaleLowerCase();
if(average = 'no'){
  alert('very very good');
  console.log(average);
} else
{
  alert('Good luck');
} 

alert('Thanks for your visit' + helloMsg);