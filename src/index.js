import { getRandomInt, disableButtons } from './helpers.js';
import { draw } from './draw.js';
import { quickSortIterative } from './quickSort.js';
import { selectionSort } from './selectionSort.js';

const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const randomBtn = document.querySelector('#randomBtn');
const startBtn = document.querySelector('#startBtn');
const selectAlgorithm = document.querySelector('#algorithms');

sliderValue.textContent = slider.value;

let array = []; // array to be sorted
let arrayLength = slider.value; // length of array

// creates a new random array
function createArray() {
  array = [];
  for (let i = 0; i < arrayLength; i += 1) {
    array.push(getRandomInt(1, 80));
  }
  draw(array, []);
}

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

// start button event
startBtn.addEventListener('click', () => {
  switch (selectAlgorithm.value) {
    case 'selection':
      disableButtons(true);
      array = selectionSort(array);
      break;
    case 'quick':
      disableButtons(true);
      array = quickSortIterative(array);
      break;
    default:
      break;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  createArray(arrayLength);
});
