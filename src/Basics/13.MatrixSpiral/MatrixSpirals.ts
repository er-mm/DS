/**
 * Write a function that accepts a number N and returns NxN sprial matrix
 * Example : matrix(3)
*               start Col    end col
 * --start row--     [[1,2,3],
 *                   [8,9,4],
 * --end row--       [7,6,5]]
 */
/**
 * 
 * @param n 
 * Algo: we have to play with rows and columns
 * will write steps in code itself for better understanding
 */
function matrix(n: number) {
	// Create an array of results which accepts the n arrays of length n
	let results: number[][] = [];
	//put n number of empty arrays inside result. we will fill these later
	for(let i = 0; i <n ; i++) results.push([]);
	//lets define our start/end rows/colums
	let startRow = 0;
	let endRow = n-1;
	let startCol = 0;
	let endCol = n-1;
	let counter = 1; //to fill the values
	// will change these based on our conditions. 
	// looping continues until startRow<= endRow and startCol <= endCol
	while(startRow<= endRow && startCol <= endCol){
		//now our first loop will iterate from startCol to endCol and fill in the values
		for(let i = startCol; i<= endCol; i++) {
			results[startRow][i] = counter;
			counter++;
		}
		// now first row is complete - move to next row
		startRow++;
		//1,2,3 are added now we have to add 4,5
		// to add 4,5 will have to loop from startRow to endRow
		for(let i = startRow; i<= endRow; i++) {
			results[i][endCol] = counter;
			counter++;
		}
		// now we are at endRow and endCol (last position)
		// now move endCol to keft side by decrementing
		// and adding 6,7
		endCol--;
		// move endCol to startCol and put in the values
		for(let i = endCol; i>= startCol; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		// now we are at endRow and endCol (first position)
		// we have to move up so decrement endRow
		endRow--;
		//to add 8 loop through endRow to startRow
		for(let i = endRow; i >= startRow; i--) {
			results[i][startCol] = counter;
			counter++;
		}
		startCol++;
	}
	console.log(results);
}
matrix(5);