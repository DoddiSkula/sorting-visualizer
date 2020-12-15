import { el, element, getRandomInt } from './helpers.js';
import { selectionSort } from './selectionSort.js';

const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const arrayEl = document.querySelector('.array');
const randomBtn = document.querySelector('#randomBtn');
const selectionBtn = document.querySelector('#selectionBtn');

sliderValue.textContent = slider.value;

// slider that changes array size
slider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
  arrayLength = e.target.value;
  createArray(arrayLength);
});

// button that creates a new random array
randomBtn.addEventListener('click', () => {
  createArray(arrayLength);
});

let array = [];                   // array to be sorted
let arrayLength = slider.value;   // length of array

// creates a new random array
function createArray(arrayLength) {
  array = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(getRandomInt(8, 450));
  }
  draw(array);
}

// draws the array as bars
export function draw(color) {
  while (arrayEl.firstChild) {
    arrayEl.removeChild(arrayEl.lastChild);
  }

  for (let i = 0; i < arrayLength; i++) {
    if (color[i] === 'green') {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar-green');
      barEl.setAttribute('style', `height: ${array[i]}px`);
      arrayEl.appendChild(barEl);
    } else if (color[i] === 'red') {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar-red');
      barEl.setAttribute('style', `height: ${array[i]}px`);
      arrayEl.appendChild(barEl);
    } else if (color[i] === 'blue') {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar-blue');
      barEl.setAttribute('style', `height: ${array[i]}px`);
      arrayEl.appendChild(barEl);
    } else {
      const barEl = el('div');
      barEl.setAttribute('class', 'bar');
      barEl.setAttribute('style', `height: ${array[i]}px`);
      arrayEl.appendChild(barEl);
    }
  }
}

// selection sort button
selectionBtn.addEventListener('click', () => {
  selectionSort(array);
});


// main
document.addEventListener('DOMContentLoaded', () => {
  console.log('Refresh');
  createArray(arrayLength);
});

