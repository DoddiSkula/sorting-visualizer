import { draw, disableButtons, arrayLength } from './index.js';
import { createColors, sleep } from './helpers.js';

let color = createColors(arrayLength);

export async function quickSortIterative(arr) {
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

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]

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

