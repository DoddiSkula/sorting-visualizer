import { draw } from './draw.js';
import { sleep, disableButtons } from './helpers.js';

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

export async function quickSortIterative(arr) {
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
