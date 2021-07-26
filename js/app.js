
"use strict";

let helloMsg=  prompt ('Welcom to guessing-game. Colud you write your name please!!');
alert=('Before we get start the user name is:' + helloMsg);

let play= Prompt ('do you enjoy to play numirce puzzel!!');
let subtract= Prompt  ('does Subtract 869 from 2482 equal 1613') ;
let divided= Prompt ('is divided 1000 by 16 equal 50.5');
let sequnce= Prompt ('to complete this sequnce 1, 1, 2, 3, X , 8, 13 the value of X should 5 ');
let average= Prompt ('the mean average of 3, 15, 8 and 22 is 14 ')

play.toUppercase();
subtract.toUppercase();
divided.toUppercase();
sequnce.toUppercase();
average.toUppercase();

let userAnswer;

switch (userAnswer) {
    case play:
      alert=('lets start');
      console.log(play)
      break;
    case subtract:
      alert = ('an awosem');
      console.log(subtract)
      break;
    case divided:
       alert = ("that great");
       console.log(divided)
      break;
    case sequnce:
      alert = ('you have right answer');
      console.log(sequnce)
      break;
    case average:
      alert = ('an amazing you answer all question');
      console.log(average)
      break;
  }

  alert=('Thanks for your visit' + helloMsg);