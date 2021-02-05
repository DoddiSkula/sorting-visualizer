(function (exports) {
  'use strict';

  /**
   * Create an element with attributes and events, and append elements or
   * strings to it.
   * 
   * Usage:
   *  const el = element(
   *    'button',
   *    { 'class': 'button' },
   *    { click: () => { ... } },
   *    'Takki'
   *   );
   * 
   * @param {string} name Element name
   * @param {object} attributes Object containing attributes to attach to element.
   * @param {object} events Object of events to add to element.
   * @param  {...any} children List of elements or strings to append to element.
   * @returns {object} HTML element.
   */
  function element(name, attributes = null, events = null, ...children) {
    const el = document.createElement(name);

    for (const child of children) {
      if (!child) {
        continue;
      }

      if (attributes) {
        for (const attrib in attributes) {
          console.log('attrib :>> ', attrib);
          el.setAttribute(attrib, attributes[attrib]);
        }
      }

      if (events) {
        for (const event in events) {
          el.addEventListener(event, events[event]);
        }
      }

      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    }

    return el;
  }

  /**
   * Simplified element function.
   * Creates an element and append elements or strings to it.
   * 
   * @param {string} name Element name
   * @param  {...any} children List of elements or strings to append to element.
   * @returns {object} HTML element.
   */
  function el(name, ...children) {
    return element(name, null, null, ...children);
  }


  /**
   * Generates a random integer i, where min <= i < max.
   * 
   * @param {number} min
   * @param {number} max 
   * @returns {integer} random integer between min and max.
   */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  /**
   * Creates a new color array with white elements
   * 
   * @param {*} n length of array
   * @returns {array} white color array 
   */
  function createColors(n) {
    let colors = [];

    for (let i = 0; i < n; i++) {
      colors.push('white');
    }

    return colors;
  }

  /**
   * Returns a promise that resolves after a timeout of ms milliseconds
   * 
   * @param {*} ms milliseconds 
   */
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let color = createColors(exports.arrayLength);

  async function quickSortIterative(arr) {
      let stack = [];

      stack.push(0);
      stack.push(arr.length - 1);

      while (stack[stack.length - 1] >= 0) {
          let end = stack.pop();
          let start = stack.pop();

          let pivotIndex = await partition(arr, start, end);

          if (pivotIndex - 1 > start) {
              stack.push(start);
              stack.push(pivotIndex - 1);
          }

          if (pivotIndex + 1 < end) {
              stack.push(pivotIndex + 1);
              stack.push(end);
          }

      }
      disableButtons(false);
  }

  async function partition(arr, start, end) {


      for (let i = start; i <= end; i++) {
          color[i] = 'blue';
      }

      const pivotValue = arr[end];
      let pivotIndex = start;
      color[pivotIndex] = 'red';
      for (let i = start; i < end; i++) {
          if (arr[i] < pivotValue) {
              await sleep(35);
              draw(arr, color);

              // Swapping elements
              [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

              // Moving to next element
              color[pivotIndex] = 'white';
              pivotIndex++;
              color[pivotIndex] = 'red';
          }
      }

      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

      for (let i = start; i <= end; i++) {
          if (i >= pivotIndex) {
              color[i] = 'green';
          }
      }
      if (end - start < 4) {
          for (let i = start; i < arr.length; i++) {
              color[i] = 'green';
          }
          draw(arr, color);
      }

      return pivotIndex;
  }

  function selectionSort(array) {
      let n = array.length;
      let color = createColors(n);

      for (let i = 0; i < n; i++) {
          setTimeout(function () {
              let min = i;
              for (let j = i + 1; j < n; j++) {
                  if (array[j] < array[min]) {
                      min = j;
                  }
              }
              if (min != i) {
                  // Swapping the elements
                  let tmp = array[i];
                  array[i] = array[min];
                  array[min] = tmp;

                  // giving color
                  color[i] = 'blue';
                  color[min] = 'red';
                  draw(array, color);
                  color[i] = 'green';
                  color[min] = 'white;';
              }
              if (i === (n - 1)) {
                  color.fill('green');
                  draw(array, color);
                  disableButtons(false);
              }
          }, 100 * i);
      }
      return array;
  }

  const slider = document.querySelector('.slider');
  const sliderValue = document.querySelector('.slider-value');
  const arrayEl = document.querySelector('.array');
  const randomBtn = document.querySelector('#randomBtn');
  const startBtn = document.querySelector('#startBtn');
  const selectAlgorithm = document.querySelector('#algorithms');

  let height = window.innerHeight / 100;

  sliderValue.textContent = slider.value;


  // slider event
  slider.addEventListener('input', (e) => {
    sliderValue.textContent = e.target.value;
    exports.arrayLength = e.target.value;
    createArray(exports.arrayLength);
  });


  let array = [];                           // array to be sorted
  exports.arrayLength = slider.value;    // length of array
  let noColor = createColors(exports.arrayLength);

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
  function disableButtons(bool) {
    slider.disabled = bool;
    randomBtn.disabled = bool;
    startBtn.disabled = bool;
    selectAlgorithm.disabled = bool;
  }

  /** 
   * Draws vertical bars for each element in array, 
   * with the same color as the element in color with the same index.
   * 
   * @param {array} array array to be drawn
   * @param {array} color string array containing names of colors
   */
  function draw(array, color) {
    while (arrayEl.firstChild) {
      arrayEl.removeChild(arrayEl.lastChild);
    }

    for (let i = 0; i < exports.arrayLength; i++) {
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

  // random button event
  randomBtn.addEventListener('click', () => {
    createArray(exports.arrayLength);
  });

  // start button event
  startBtn.addEventListener('click', () => {
    switch(selectAlgorithm.value) {
      case 'selection':
        disableButtons(true);
        array = selectionSort(array);
        break;
      case 'quick':
        disableButtons(true);
        array = quickSortIterative(array);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log(`height: ${height}`);
    createArray(exports.arrayLength);
  });

  exports.disableButtons = disableButtons;
  exports.draw = draw;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=bundle.js.map
