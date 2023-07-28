import { getRandomInt, disableButtons } from "./helpers.js";
import { draw } from "./draw.js";
import { quickSortIterative } from "./quickSort.js";
import { selectionSort } from "./selectionSort.js";

const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const randomBtn = document.querySelector("#randomBtn");
const startBtn = document.querySelector("#startBtn");
const selectAlgorithm = document.querySelector("#algorithms");

sliderValue.textContent = slider.value;

let array = []; // array to be sorted
let arrayLength = slider.value; // length of array

function populateArray(N) {
  const newArr = [];
  for (let i = 1; i <= N; i++) {
    newArr.push(i);
  }
  return newArr;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// creates a new random array
function createArray() {
  array = populateArray(arrayLength);
  array = shuffle(array);
  draw(array, []);
}

// slider event
slider.addEventListener("input", (e) => {
  sliderValue.textContent = e.target.value;
  arrayLength = e.target.value;
  createArray(arrayLength);
});

// random button event
randomBtn.addEventListener("click", () => {
  createArray(arrayLength);
});

// start button event
startBtn.addEventListener("click", () => {
  switch (selectAlgorithm.value) {
    case "selection":
      disableButtons(true);
      array = selectionSort(array);
      break;
    case "quick":
      disableButtons(true);
      array = quickSortIterative(array);
      break;
    default:
      break;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createArray(arrayLength);
});
