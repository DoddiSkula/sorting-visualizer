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
export function el(name, ...children) {
  return element(name, null, ...children);
}

/**
 * Generates a random integer i, where min <= i < max.
 *
 * @param {number} min
 * @param {number} max
 * @returns {integer} random integer between min and max.
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns a promise that resolves after a timeout of ms milliseconds
 *
 * @param {*} ms milliseconds
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Disables or enables all buttons
 *
 * @param {boolean} bool if true disable all buttons, else enable all buttons.
 */
export function disableButtons(bool) {
  const slider = document.querySelector('.slider');
  const randomBtn = document.querySelector('#randomBtn');
  const startBtn = document.querySelector('#startBtn');
  const selectAlgorithm = document.querySelector('#algorithms');

  slider.disabled = bool;
  randomBtn.disabled = bool;
  startBtn.disabled = bool;
  selectAlgorithm.disabled = bool;
}
