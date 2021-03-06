/**
 * 		Name		WorstCaseRuntime		Difficulty
 * 		BubbleSort			n^2				easiest
 * 		SelectionSort		n^2				easier
 * 		Merge Sort			n*log(n)		medium
 */

// Bubbling - loop throuhgh by compairing frst and next element - swap if frst is greater. 
// in first iteration the max element is gone to last
// so no need to check the last thats y make an array above this. 
const arr1 = [5, 4, 3, 2, 1];

function bubbleSort(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// let temp = arr[j];
				// arr[j] = arr[j + 1];
				// arr[j + 1] = temp;
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // ES6
			}
		}
	}
	return arr;
}

console.log(bubbleSort(arr1));

//Optimized: if data is nearly sorted
function bubbleSort1(arr: number[]) {
	let noSwaps;
	for (let i = 0; i < arr.length; i++) {
		noSwaps = true;
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// let temp = arr[j];
				// arr[j] = arr[j + 1];
				// arr[j + 1] = temp;
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // ES6
				noSwaps = false;
				console.log('hh');
			}
		}
		if(noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort1(arr1));