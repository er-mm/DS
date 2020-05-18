/**
 * 		Name		WorstCaseRuntime		Difficulty
 * 		BubbleSort			n^2				easiest
 * 		SelectionSort		n^2				easier
 * 		Merge Sort			n*log(n)		medium
 */

// assume current value in i to indexOfMin and prove to wrong
// itrate throgh i+1 to the end and check the value is less and if so up date the valie of min
// swap
// also name as proove me wrong
const arr2 = [5, 4, 3, 2, 1];

function selectionSort(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i; // prove me wrong
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}
		if (i !== indexOfMin) {
			let temp = arr[i];
			arr[i] = arr[indexOfMin];
			arr[indexOfMin] = temp;
		}
	}
	return arr;
}

console.log(selectionSort(arr2));