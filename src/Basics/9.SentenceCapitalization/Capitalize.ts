// Capitalize
/**
 * Write a function that accepts a string. 
 * The function should capitalize the first letter of each word 
 * in the string then return the capitalized string.
 * ---Examples: 
 * capitalize(a short sentence) => A Short Sentence
 * capitalize(look, it is working) => Look, It Is Working
 */

function capitalize1(str: string) {
    // My solution
    return str.split(' ').map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(' ');
}
const capitalizedstring1 = capitalize1('look, it is working!');
console.log('capitalizedstring1 is-> ', capitalizedstring1);

// solution2 : string.slice(1) => index 1 to last char of the word
function capitalize2(str: string) {
    return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}
const capitalizedstring2 = capitalize2('look, it is working!');
console.log('capitalizedstring2 is-> ', capitalizedstring2);

// solution3 : iterate through string itself
/**
 * Create an empty string called result - no - create result which is the 
 * firstChar of the string capitalized
 * for each char in the string
 *  if the char to the left a space
 *      capitalize it and add it to result
 *  else add it to result
 * @param str 
 */
function capitalize3(str: string) {
    // works for english languages
    let result = str[0].toUpperCase();
    for(let i=1; i< str.length; i++) {
        if(str[i-1] === ' ') result += str[i].toUpperCase()
        else result += str[i]
    }
    return result;
}
const capitalizedstring3 = capitalize3('look, it is working!');
console.log('capitalizedstring3 is-> ', capitalizedstring3);