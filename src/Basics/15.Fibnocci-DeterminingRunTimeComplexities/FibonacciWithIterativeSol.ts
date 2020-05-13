/**
 * Print nth entry in fibonacci series.
 * The Fibonacci series is an ordering of numbers where
 * each number is the sum of preceeding two.
 * Example -> [0,1,1,2,3,5,8,13,21,34] -> forms the first 10 entries of series
 * fib(4) === 3
 */
// First make the fibonacci series upto 10 entries
// then print nth entry
// its linear runtime complex
function fib1(n: number) {
	let result = []
	let first = 0;
	let second = 1;
	result.push(first);
	result.push(second);
	for (let i = 2; i <= n; i++) {
		const third = first + second;
		first = second;
		second = third;
		result.push(third);
	}
	console.log(result[n]);
}
fib1(4);

// easy way of iteration
function fib2(n: number){
	let result = [0,1];
	for (let i=2;i<=n;i++){
		let first = result[i-2];
		let second = result[i-1];
		result.push(first+second);
	}
	console.log(result[n]); //or result.length-1
}
fib2(4)