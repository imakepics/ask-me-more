'use strict';

let answers = [
    'supergeil',
    'super heftig',
    'super fresh',
    'super fit',
    'super Cookies',
    'super Montag',
    'super spritzig',
    'super crazy',
    'sehr geil',
    'richtig supergeil',
    'toll',
    'super',
    'super stark',
    'super Power'
];

showAnswers();
setInterval(showAnswers, 1000);

function showAnswers() {
    let answer = answers[Math.floor(Math.random() * answers.length)];
    document.querySelector('#randomAnswer').innerHTML = answer;
};
