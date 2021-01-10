import { draw, disableButtons, arrayLength } from './index.js';
import { createColors, sleep } from './helpers.js';

let color = createColors(arrayLength);

export async function quickSortIterative(arr) {
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    let stack = [];

    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);

    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays

    while (stack[stack.length - 1] >= 0) {

        // Extracting the top unsorted subarray
        let end = stack.pop();
        let start = stack.pop();


        let pivotIndex = await partition(arr, start, end);

        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
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

    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;
    color[pivotIndex] = 'red';
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {

            // drawing the array after waiting 35 ms
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

    // Putting the pivot value in the middle
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

