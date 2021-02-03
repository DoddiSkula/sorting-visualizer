import { createColors, el, getRandomInt } from './helpers.js';
import { quickSortIterative } from './quickSort.js';
import { selectionSort } from './selectionSort.js';

const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const arrayEl = document.querySelector('.array');
const randomBtn = document.querySelector('#randomBtn');
const selectionBtn = document.querySelector('#selectionBtn');
const quickBtn = document.querySelector('#quickBtn');

let height = window.innerHeight / 100;

sliderValue.textContent = slider.value;


// slider event
slider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
  arrayLength = e.target.value;
  createArray(arrayLength);
});

// random button event
randomBtn.addEventListener('click', () => {
  createArray(arrayLength);
});

let array = [];                   // array to be sorted
export let arrayLength = slider.value;   // length of array
let noColor = createColors(arrayLength);

// creates a new random array
function createArray(arrayLength) {
  array = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(getRandomInt(1, 80));
  }
  draw(array, noColor);
}

/**
 * Disables or enables all buttons
 * 
 * @param {boolean} bool if true disable all buttons, else enable all buttons.
 */
export function disableButtons(bool) {
  slider.disabled = bool;
  randomBtn.disabled = bool;
  selectionBtn.disabled = bool;
  quickBtn.disabled = bool;
}

/** 
 * Draws vertical bars for each element in array, 
 * with the same color as the element in color with the same index.
 * 
 * @param {array} array array to be drawn
 * @param {array} color string array containing names of colors
 */
export function draw(array, color) {
  while (arrayEl.firstChild) {
    arrayEl.removeChild(arrayEl.lastChild);
  }

  for (let i = 0; i < arrayLength; i++) {
    if (color[i] === 'green') {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar-green');
      barEl.setAttribute('style', `height: ${array[i] * height}px`);
      arrayEl.appendChild(barEl);
    } else if (color[i] === 'red') {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar-red');
      barEl.setAttribute('style', `height: ${array[i] * height}px`);
      arrayEl.appendChild(barEl);
    } else if (color[i] === 'blue') {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar-blue');
      barEl.setAttribute('style', `height: ${array[i] * height}px`);
      arrayEl.appendChild(barEl);
    } else {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar');
      barEl.setAttribute('style', `height: ${array[i] * height}px`);
      arrayEl.appendChild(barEl);
    }
  }
}

// Selection sort button event
selectionBtn.addEventListener('click', () => {
  disableButtons(true);
  array = selectionSort(array);
});

// Quick sort button event
quickBtn.addEventListener('click', () => {
  disableButtons(true);
  array = quickSortIterative(array);
});


document.addEventListener('DOMContentLoaded', () => {
  console.log(`height: ${height}`);
  createArray(arrayLength);
});



