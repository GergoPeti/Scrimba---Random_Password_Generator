'use strict';

const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const btnEl = document.querySelector('.btn');
const firstPasswordEl = document.querySelector('.first-pw');
const secondPasswordEl = document.querySelector('.second-pw');

const inputFieldEl = document.querySelector('.input-pw_container');

const randomIndex = function () {
  return Math.floor(Math.random() * characters.length);
};

btnEl.addEventListener('click', function () {
  let pwLengthSetByUser;

  if (Number(inputFieldEl.value) === 0) {
    pwLengthSetByUser = 15;
  } else {
    pwLengthSetByUser = Number(inputFieldEl.value);
  }

  firstPasswordEl.textContent = '';
  secondPasswordEl.textContent = '';

  for (let i = 0; i < pwLengthSetByUser; i++) {
    firstPasswordEl.textContent += characters[randomIndex()];
    secondPasswordEl.textContent += characters[randomIndex()];
  }
});

// Theme changer

const themeChangerEl = document.querySelector('.theme-changer');
const contentDivEl = document.querySelector('.content');
const titleEl = document.querySelector('.title');
const subtitleEl = document.querySelector('.subtitle');
const pwContainerParagraphEl = document.querySelector('.p-pw_container');
// const textInputEl = document.querySelector('.input-pw_container');

themeChangerEl.addEventListener('click', function () {
  contentDivEl.classList.toggle('mode-light_div');
  titleEl.classList.toggle('mode-light_h1');
  subtitleEl.classList.toggle('mode-light_p');
  pwContainerParagraphEl.classList.toggle('mode-light_p');
  //   textInputEl.classList.toggle('mode-light_input');
});
