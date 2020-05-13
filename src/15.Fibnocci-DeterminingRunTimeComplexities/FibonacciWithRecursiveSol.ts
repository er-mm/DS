// Recursive solution
function fibRec1(n: number, result: number[] = [0, 1]) {
	// base case
	if (n === result.length - 1) {
		console.log(result[n]) // or result.ltngth - 1
		return;
	}
	let first = result[result.length - 2];
	let second = result[result.length - 1];
	result.push(first + second);
	fibRec1(n, result);
}
fibRec1(4);

// more easy but tricky sol
// exponential runtime (2^n) refer FibnocciByRec.png in assets
// bad because of run time (calling identical functions again and again)
function fibRec2(n: number): any {
	if (n < 2) {
		// console.log(n);
		return n;
	}
	return fibRec2(n - 1) + fibRec2(n - 2);
}
const a = fibRec2(4);
console.log(a);
