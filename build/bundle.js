(function () {
  'use strict';

  /* eslint-disable */
  /**
   * Create an element with attributes and events, and append elements or
   * strings to it.
   *
   * Usage:
   *  const el = element(W
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
  function element(name, attributes = null, ...children) {
    const elem = document.createElement(name);

    for (const child of children) {
      if (!child) {
        continue;
      }

      if (attributes) {
        for (const attrib in attributes) {
          elem.setAttribute(attrib, attributes[attrib]);
        }
      }

      if (typeof child === 'string') {
        elem.appendChild(document.createTextNode(child));
      } else {
        elem.appendChild(child);
      }
    }

    return elem;
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
    return element(name, null, ...children);
  }

  /**
   * Generates a random integer i, where min <= i < max.
   *
   * @param {number} min
   * @param {number} max
   * @returns {integer} random integer between min and max.
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Returns a promise that resolves after a timeout of ms milliseconds
   *
   * @param {*} ms milliseconds
   */
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Disables or enables all buttons
   *
   * @param {boolean} bool if true disable all buttons, else enable all buttons.
   */
  function disableButtons(bool) {
    const slider = document.querySelector('.slider');
    const randomBtn = document.querySelector('#randomBtn');
    const startBtn = document.querySelector('#startBtn');
    const selectAlgorithm = document.querySelector('#algorithms');

    slider.disabled = bool;
    randomBtn.disabled = bool;
    startBtn.disabled = bool;
    selectAlgorithm.disabled = bool;
  }

  const arrayEl = document.querySelector('.array');
  const height = window.innerHeight / 100;

  /**
   * Draws vertical bars for each element in array,
   * with the same color as the element in color with the same index.
   *
   * @param {array} arr array to be drawn
   * @param {array} color string array containing names of colors
   */
  function draw(arr, color) {
    while (arrayEl.firstChild) {
      arrayEl.removeChild(arrayEl.lastChild);
    }

    for (let i = 0; i < arr.length; i += 1) {
      if (color[i] === 'green') {
        const barEl = el('div');
        barEl.setAttribute('class', 'bar-green');
        barEl.setAttribute('style', `height: ${arr[i] * height}px`);
        arrayEl.appendChild(barEl);
      } else if (color[i] === 'red') {
        const barEl = el('div');
        barEl.setAttribute('class', 'bar-red');
        barEl.setAttribute('style', `height: ${arr[i] * height}px`);
        arrayEl.appendChild(barEl);
      } else if (color[i] === 'blue') {
        const barEl = el('div');
        barEl.setAttribute('class', 'bar-blue');
        barEl.setAttribute('style', `height: ${arr[i] * height}px`);
        arrayEl.appendChild(barEl);
      } else {
        const barEl = el('div');
        barEl.setAttribute('class', 'bar');
        barEl.setAttribute('style', `height: ${arr[i] * height}px`);
        arrayEl.appendChild(barEl);
      }
    }
  }

  const color = [];

  async function partition(arr, start, end) {
    const array = arr;

    for (let i = start; i <= end; i += 1) {
      color[i] = 'blue';
    }

    const pivotValue = arr[end];
    let pivotIndex = start;
    color[pivotIndex] = 'red';
    for (let i = start; i < end; i += 1) {
      if (arr[i] < pivotValue) {
        // eslint-disable-next-line no-await-in-loop
        await sleep(35);

        draw(arr, color);

        // Swapping elements
        [array[i], array[pivotIndex]] = [arr[pivotIndex], arr[i]];

        // Moving to next element
        color[pivotIndex] = 'white';
        pivotIndex += 1;
        color[pivotIndex] = 'red';
      }
    }

    [array[pivotIndex], array[end]] = [arr[end], arr[pivotIndex]];

    for (let i = start; i <= end; i += 1) {
      if (i >= pivotIndex) {
        color[i] = 'green';
      }
    }
    if (end - start < 4) {
      for (let i = start; i < arr.length; i += 1) {
        color[i] = 'green';
      }
      draw(array, color);
    }

    return pivotIndex;
  }

  async function quickSortIterative(arr) {
    const stack = [];

    stack.push(0);
    stack.push(arr.length - 1);

    while (stack[stack.length - 1] >= 0) {
      const end = stack.pop();
      const start = stack.pop();

      // eslint-disable-next-line no-await-in-loop
      const pivotIndex = await partition(arr, start, end);

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

  function selectionSort(array) {
    const arr = array;
    const n = arr.length;
    const color = [];

    for (let i = 0; i < n; i += 1) {
      setTimeout(() => {
        let min = i;
        for (let j = i + 1; j < n; j += 1) {
          if (arr[j] < arr[min]) {
            min = j;
          }
        }
        if (min !== i) {
          // Swapping the elements
          const tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;

          // giving color
          color[i] = 'blue';
          color[min] = 'red';
          draw(arr, color);
          color[i] = 'green';
          color[min] = 'white;';
        }
        if (i === n - 1) {
          color.fill('green');
          draw(arr, color);
          disableButtons(false);
        }
      }, 100 * i);
    }
    return arr;
  }

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
    createArray();
  });

  // random button event
  randomBtn.addEventListener('click', () => {
    createArray();
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
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    createArray();
  });

}());
//# sourceMappingURL=bundle.js.map
