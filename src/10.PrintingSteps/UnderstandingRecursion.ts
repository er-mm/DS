//Recusrion
/**
 * Write a function which contains n as a number and 
 * console.log the numbers from n to 1
 * example
 * recursiveFunction(10) => 10,9,8,7,6,5,4,3,2,1
 */

function recursiveFunction(n: number, dec = 1){
    /**
     * First thing you have to write the base case : 
     * Base Case: the case at which your recursion stops you have to rt=eturn from the function
     * in this example recusrion stops when n === 0
     */
    if (n === 0) return;
    /**
     * Next step is to print your solution
     */
    console.log(n);
    /**
     * Next step is call the same function again WITH CHANGED PARAMS
     * if you dont change the params the function will go into the loop.
     */
    recursiveFunction(n - dec);

}
recursiveFunction(10);

/**
 * Take Aways : 
 * 1. Figure out the BARE MINIMUM PIECES of information to represent your problem
 * 2. Give reasonable defaults to the BARE MINIMUM PIECES of information.
 * 3. Check the base case. Is there any work left to do? if not, return
 * 4. Do some work, call your function again making sure the arguments have CHANGED in some fasion
 */