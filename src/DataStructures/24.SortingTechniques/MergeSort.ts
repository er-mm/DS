/**
 * 		Name		WorstCaseRuntime		Difficulty
 * 		BubbleSort			n^2				easiest
 * 		SelectionSort		n^2				easier
 * 		Merge Sort			n*log(n)		medium
 */

/**
 * 	[-30,22]		[0,97]		these are sorted arrays
 * 	merge takes two sorted arrays and merge together in a sorted way
 * 	retults array => []
 */

const arr3 = [5, 4, 3, 2, 1];

function mergeSort(arr: number[]): number[] {
	// subdivide tin tow arrays and pass back to function 
	// sundivide til larr.length === 1
	if (arr.length === 1) return arr;
	// divide arr in two equal halfs
	const centerIndex = Math.floor(arr.length / 2);
	const left = arr.slice(0, centerIndex);
	const right = arr.slice(centerIndex); // center to end of array
	// call mergeSort to divide
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left: any, right: any) {
	let results = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) results.push(left.shift());
		else results.push(right.shift());
	}
	return [...results, ...left, ...right];
}

console.log('example for merge-->', merge([-30, 22], [0, 97]));
console.log(mergeSort(arr3));