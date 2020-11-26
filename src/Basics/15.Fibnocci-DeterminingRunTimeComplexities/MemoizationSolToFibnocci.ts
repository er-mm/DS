//memoized Solution. 
// what is Memoization ? 
// store the arguments of each function call along with result
// If the function is called again with same arguments, 
// return the computed result, rather than running the function again.
/**
 * Trick Behind is 
 * We are making a general Memoize function
 * Generial means we can use the function where we want memoization. 
 * Here. the process is 
 * SlowFibFunction --> Memoizer ---> Fast, MemoizedFuntion
 * ***Calling a function (slow) with a function (MemoizeFunction) which will return a function (fast)
 */
function memoize(fn: any) {
	// storage area
	const cache: any = {}; // record to prev call of the function and the respective records
	return function (this: any, ...args: any) { // this anonymus function here is nothing but fib which is declared below at const
		// to make general we use any number of arguments
		// check if something present in cache[args] if it is then return
		// console.log(args);
		if (cache[args]) return cache[args];
		const result = fn.apply(this, args);
		cache[args] = result;
		// console.log(cache);
		return result;
	}
}

function slowFib(n: number): any {
	if (n < 2) {
		// console.log(n);
		return n;
	}
	return slowFib(n - 1) + slowFib(n - 2);
}

const fib = memoize(slowFib)
console.log(fib(4));

// Memoized sol for fibonacchi 
// function fib(n, memo=[]){
// 	if(memo[n] !== undefined) return memo[n]
// 	if(n <= 2) return 1;
// 	var res = fib(n-1, memo) + fib(n-2, memo);
// 	memo[n] = res;
// 	return res;
//   }

// another memoised solution
// function fib(n, savedFib={}) {
// 	// base case
// 	if (n <= 0) { return 0; }
// 	if (n <= 2) { return 1; }
 
// 	// memoize
// 	if (savedFib[n - 1] === undefined) {
// 		 savedFib[n - 1] = fib(n - 1, savedFib);
// 	}
 
// 	// memoize
// 	if (savedFib[n - 2] === undefined) {
// 		 savedFib[n - 2] = fib(n - 2, savedFib);
// 	}
 
// 	return savedFib[n - 1] + savedFib[n - 2];
//  }

// Tabulated Version - have done this before
// function fib(n){
//     if(n <= 2) return 1;
//     var fibNums = [0,1,1];
//     for(var i = 3; i <= n; i++){
//         fibNums[i] = fibNums[i-1] + fibNums[i-2];
//     }
//     return fibNums[n];
// }