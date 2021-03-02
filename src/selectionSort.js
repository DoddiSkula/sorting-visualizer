import { draw } from './draw.js';
import { disableButtons } from './helpers.js';

export function selectionSort(array) {
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
