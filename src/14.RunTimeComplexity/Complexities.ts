const definitionRunTimeComplexity = `
RunTimeComplexity : Determines the Performance of an algo. 
Ques: How much more processing time is required to run your algo if we double the inputs? 
1. Lets go to our StringReversal Program (1.StringReversal)
	abc -> cba or abcdef -> fedcba
	here Each additional char = 1 step through 1 loop
	or we can say: 
	This would be 'N' or 'linear' runtime.
2. Move on to Steps Program (10.PrintingSteps)
	when n=2:
	# 
	##	had to do 4 things #,' ',##
	when n=3: 
	#  
	## 
	###	had to do 9 things #,' ',' ',#,#,' ',#,#,#
	when n=4: had to do 16 things 
	Basically, for n we have to do n^2 things
	This would be 'N^2' or 'Quadratic' runtime
`
console.log(definitionRunTimeComplexity);
console.log('_________________________________________________________________________________')
const constantTime = `No matter how many elements we are working with,
					the algo/operation/whatever will always take the same amount of time.`;
const logarithmicTime = `You have this if doubling the number of elements you are iterating
					over doesnt double the amount of work.
					Searching Operations are log(n)`;
const linearTime = `Iterating through all the elements in a collection of data.
					If you see a loop spanning from 0 to arr.length, you probably
					have n or linear runtime`;
const quasiLinearTime = `you have this if doubling the number of elements you are iterating
					over doesnt double the amount of work.
					Sorting Operations are n*log(n)`;
const quadraticTime = `every element in a collection has to be compared to every other element.
					The HandShake Problem`;
const exponentialTime = `If you add a *single* element to a collection,
					the processing power required doubles (fibonacci in recursion)`;
					

const someRunTimeComplexities = `

	Constant Time ----- 1 ------- ${constantTime}

	Logarithmic Time - log(n) --- ${logarithmicTime}

	Linear Time ------- n ------- ${linearTime}

	QuasiLinear Time - n*log(n) - ${quasiLinearTime}

	Quadratic Time --- n^2 ------ ${quadraticTime}

	Exponential Time - 2^n ------ ${exponentialTime}
`
console.log(someRunTimeComplexities);