import { draw, disableButtons } from './index.js';
import { createColors } from './helpers.js';

export function selectionSort(array) {
    let n = array.length;
    let color = createColors(n);

    for (let i = 0; i < n; i++) {
        setTimeout(function () {
            // Finding the smallest number in the subarray
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
                color[i] = 'green'
                color[min] = 'white;'
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