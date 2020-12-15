import { draw } from "./index.js";

let color = [];

function createColor(n) {
    color = [];
    for(let i = 0; i < n; i++){
        color.push('white');
    }
}

export function selectionSort(array) { 
    let n = array.length;
    createColor(n);
        
    for(let i = 0; i < n; i++) {
        setTimeout(function() { 
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                if(array[j] < array[min]) {
                    min=j; 
                }
             }

             if (min != i) {
                 // Swapping the elements
                 let tmp = array[i]; 
                 array[i] = array[min];
                 array[min] = tmp;
                 
                 // give color
                 color[i] = 'blue';
                 color[min] = 'red'; 
                 draw(color);
                 color[i] = 'green'
                 color[min] = 'white;'
            }
            if(i === (n-1)) {
                color.fill('green');
                draw(color); 
            }

        }, 100 * i); 
    }

}