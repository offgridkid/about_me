'use strict';


  var name = prompt('Hello, whats your name?');
  console.log('name: '+name);


//first question
function question1() {
  var one = prompt('Do you imagine you\'d make a good software developer? Please answer by typing yes or y, or no or n');
  console.log('first q: '+one);

  if (one.toLowerCase() === 'yes' || one.toLowerCase() === 'y') {
    alert('overconfidence killed the cat');
  } else {
    alert('then what ya doin here??');
  }
}//comment for a-c-p (christina)

//second question
function question2() {
  var two = prompt('Did you have trouble on the homework last night?');
  console.log('second q: '+two);

  if (two.toLowerCase() === 'yes' || two.toLowerCase() === 'y') {
    alert('practice makes perfect!');
  } else {
    alert('uh ohh, get ittt');
  }
}


//third question
function question3() {
  var three = prompt('Are you a water sign?');
  console.log('third q: '+three);

  if (three.toLowerCase() === 'yes' || three.toLowerCase() === 'y') {
    alert('That\'s what\'s up! Fish-gang, gill-bearers, pisces 6000, \
    lemme get a glub glub');
  } else {
    alert('Wouldn\'t wanna be ya');
  }
}


//fourth question
function question4() {
  var four = prompt('Do you enjoy long walks on the beach?');
  console.log('fourth q: '+four);

  if (four.toLowerCase() === 'yes' || four.toLowerCase() === 'y') {
    alert('basic af');
  } else {
    alert('still basic tho');
  }
}


//fifth question
function question5() {
  var five = prompt('Are you tired of answering questions yet?!');
  console.log('fifth q: '+five);

  if (five.toLowerCase() === 'yes' || five.toLowerCase() === 'y') {
    alert('Good, I\'m tired of asking them!');
  } else {
    alert('well you\'re done anyways.');
  }
}

//enter: wednesday
//questionsixxx
function question6() {
  var counter = 0;
  var number;

  while (number !== 6 && counter !== 4) {
    number = parseInt(prompt('How many times do you think I\'ve rewritten this code?'));

    if (number < 6) {
      alert('you guessed too low');
      counter++;
    } else if (number > 6) {
      alert('you guessed too high');
      counter++;
    } else if (number === NaN || number === null) {
      alert('enter a number please');
      counter++;
    }

  }

  console.log('counter:', counter);
}


//se7en
function question7() {
  var states = ['virginia', 'kentucky'];

  for (var i = 0; i < 6; i++) {
      var guess = prompt('Can you guess a state that I\'ve lived in?');
      for (var n = 0, l = states.length; n < l; n++) {
        if (guess === states[n]) {
          alert('you\'re right!');
          i = 6;
          break;
        } else {
          alert('you\'re wrong');
        }
      }
  }
  alert('The only two states I\'ve lived in are '+states.toString());
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();
