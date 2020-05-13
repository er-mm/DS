/**
 * Write a function that return the number of vowels used in a string
 * vowel('Hi there) => 3
 */
// Solution1 - iterative solution
function vowel1(str: string) {
    let count = 0;
    const vowels = ['a','e','i','o','u'];
    for (let char of str.toLowerCase())
        if (vowels.includes(char))
            count++;
    console.log(count);
}
vowel1('Hi There!')

// solution2: regex :
// using match: will return array of match if something is available ele return falsy value
function vowel2(str: string){
    // if str contains chars specified in []. g: dont stop i:case insensitive
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
const count = vowel2('sff!');
console.log(count);