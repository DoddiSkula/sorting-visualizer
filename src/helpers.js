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
export function element(name, attributes = null, events = null, ...children) {
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
export function el(name, ...children) {
  return element(name, null, null, ...children);
}


/**
 * Generates a random integer i, where min <= i < max.
 * 
 * @param {number} min
 * @param {number} max 
 * @returns {integer} random integer between min and max.
 */
export function getRandomInt(min, max) {
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
export function createColors(n) {
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
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}