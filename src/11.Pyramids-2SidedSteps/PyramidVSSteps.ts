/**
 * Write a function which logs pyramid shape with n levels
 * example: 
 * pyramid(3)
 *   #  
 *  ### 
 * #####
 * **Here the catch is to determine the length of colums and how # and ' ' will print
 * to determine the column: use 2*n -1 where n is the level
 * to determine the # : use mid point of the column i.e. mid = Math.floor((2*n-1)/2)
 * print # where mid, mid-1, mid+1 (1 is based on the row if row is 1) like this. will discuss briefly in code
 */

function pyramid1(n: number) {
	const noOfColums = 2 * n - 1;
	const midPoint = Math.floor(noOfColums / 2);
	for (let row = 0; row < n; row++) {
		let levels = '';
		for (let columns = 0; columns < noOfColums; columns++) {
			levels += midPoint - row <= columns && midPoint + row >= columns
				? '#'
				: ' ';
		}
		console.log(levels);
	}
}
pyramid1(4);

// solution2: using recursion 

function pyramid2(n: number, row: number = 0, level: string = ''): any {
	// base case
	if (n === row) return;
	// check end of row. 
	const noOfColums = 2 * n - 1;
	if (noOfColums === level.length) {
		console.log(level);
		return pyramid2(n, row + 1);
	}
	const midPoint = Math.floor(noOfColums / 2);
	const add = midPoint - row <= level.length && midPoint + row >= level.length ? '#' : ' '; // in recrusion column will be level.length
	pyramid2(n, row, level + add);
}
pyramid2(4)