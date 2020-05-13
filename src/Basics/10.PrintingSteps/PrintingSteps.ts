/**
 * Write a function  that accepts a positive number n
 * The function shoukld console log a step shape with n levels using # char
 * Make sure the step has spaces on the right hand side. 
 * --example 
 * step(2)
 * '# '
 * '##'
 * step(3)
 * '#  '
 * '## '
 * '###'
 */
/**
 * Algo: we are going to see this problem with rows and colums 
 * Make a loop or row which iterates from 0 to n
 * now take an empty string called step which we will print. 
 * inside row for loop make another for loop of colum from 0 to n
 * ** check if column  <= row, add # to step
 * ** else add ' ' to step
 * outside the column for loop console log step
 */

function step1(n: number) {
	for (let row = 0; row < n; row++) {
		let step = '';
		for (let col = 0; col < n; col++) {
			if (col <= row) step += '#'
			else step += ' '
		}
		console.log(step)
	}
}
step1(3);

//Solution2: recursive solution - if you dont know the recusrion read it from UnderstandingRecursion.ts
/**
 * Base Case : when row === n, we have nothing to do so return;
 * function call : when stair.length === n we are at end of row
 * change params: if stair.length <= row stair+"#" else stair + " "
 * @param n 
 * Highly Recommended to follow steps else you will confused. 
 */

function step2(n: number, row: number = 0, stair: string = ''): any { //step2: initialize row = 0, step4: initialize stair = ''
	// check Base Case
	if(n === row) return; //step1 : now where is the row coming from? it comes from the function will make it default
	// check 2nd case; 
	if(n === stair.length) { //step3: stair? same as row will initialize on function as param
		// here we are at the end of row
		// here we have to print our row i.e. stair
		console.log(stair); //step5
		// noting to do now so just return and
		// call the function again with the next row but stair as ''
		return step2(n, row+1); //step6: stair automatically default to 0
	}
	// now add the stairs with # and space ' '
	const addHashOrSpace = stair.length <= row ? '#' : ' '; //step 7
	// now call the function again with new stair value but the same row; 
	step2(n, row, stair+addHashOrSpace);

}
step2(3);