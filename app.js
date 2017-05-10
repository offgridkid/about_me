'use strict';

var name = prompt('Hello, whats your name?');
console.log('name: '+name);

//first question
var one = prompt('Do you imagine you\'d make a good software developer?');
console.log('first q: '+one);

if (one.toLowerCase() === 'yes' || one.toLowerCase() === 'y') {
  alert('overconfidence killed the cat');
} else {
  alert('then what ya doin here??');
}


//second question
var two = prompt('Did you have trouble on the homework last night?');
console.log('second q: '+two);

if (two.toLowerCase() === 'yes' || two.toLowerCase() === 'y') {
  alert('practice makes perfect!');
} else {
  alert('uh ohh, get ittt');
}


//third question
var three = prompt('Are you a water sign?');
console.log('third q: '+three);

if (three.toLowerCase() === 'yes' || three.toLowerCase() === 'y') {
  alert('That\'s what\'s up! Fish-gang, gill-bearers, pisces 6000, \
  lemme get a glub glub');
} else {
  alert('Wouldn\'t wanna be ya');
}


//fourth question
var four = prompt('Do you enjoy long walks on the beach?');
console.log('fourth q: '+four);

if (four.toLowerCase() === 'yes' || four.toLowerCase() === 'y') {
  alert('basic af');
} else {
  alert('still basic tho');
}


//fifth question
var five = prompt('Are you tired of answering questions yet?!');
console.log('fifth q: '+five);

if (five.toLowerCase() === 'yes' || five.toLowerCase() === 'y') {
  alert('Good, I\'m tired of asking them!');
} else {
  alert('well you\'re done anyways.');
}
