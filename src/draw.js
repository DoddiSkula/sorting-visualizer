import { el } from "./helpers.js";

const arrayEl = document.querySelector(".array");
const height = window.innerHeight / 130;

/**
 * Draws vertical bars for each element in array,
 * with the same color as the element in color with the same index.
 *
 * @param {array} arr array to be drawn
 * @param {array} color string array containing names of colors
 */
export function draw(arr, color) {
  while (arrayEl.firstChild) {
    arrayEl.removeChild(arrayEl.lastChild);
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (color[i] === "green") {
      const barEl = el("div");
      barEl.setAttribute("class", "bar-green");
      barEl.setAttribute("style", `height: ${arr[i] * height + 50}px`);
      arrayEl.appendChild(barEl);
    } else if (color[i] === "red") {
      const barEl = el("div");
      barEl.setAttribute("class", "bar-red");
      barEl.setAttribute("style", `height: ${arr[i] * height + 50}px`);
      arrayEl.appendChild(barEl);
    } else if (color[i] === "blue") {
      const barEl = el("div");
      barEl.setAttribute("class", "bar-blue");
      barEl.setAttribute("style", `height: ${arr[i] * height + 50}px`);
      arrayEl.appendChild(barEl);
    } else {
      const barEl = el("div");
      barEl.setAttribute("class", "bar");
      barEl.setAttribute("style", `height: ${arr[i] * height + 50}px`);
      arrayEl.appendChild(barEl);
    }
  }
}
