// Anagrams
/**
 * check to see if two provided strings are anagrams of each other. 
 * one string is an anagram of another if it uses the same char in the same quantity. 
 * Only consider chars. not spaces or punctuations
 * Consider captitol letters to be the same as lower case
 * -- examples 
 * anagrams(rail safety, fairy tales)
 * using regex \w - given only characters
 * 
 * ex. const word = "HI THERE!!!"
 * word.replace(/[^\w]/g,"");
 */
const word = "HI THERE!!!"
console.log(word.replace(/[^\w]/g, ""));
console.log(word.replace(/[^\w]/g, "").toLowerCase());

function anagrams(stringA: string, stringB: string) {
    const aCahrMap= buildCharMap(stringA);
    const bCahrMap = buildCharMap(stringB);
    if(Object.keys(aCahrMap).length !== Object.keys(bCahrMap).length) return false;
    for (let char in aCahrMap) {
        if(aCahrMap[char] !== bCahrMap[char]) return false;
    }
    return true;
}

function buildCharMap(str: string) {
    const charMaps: {[key: string]: number} = {}
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMaps[char] = charMaps[char] + 1 || 1
    }
    return charMaps;
}

const isAnaagram = anagrams('rail safety', 'fairy tales');
console.log('solution1 is anagram? ',isAnaagram);
// takes 3 iterations - poor

// sol 2: array.sort. first clean both strings and do lowercase them and sort then match
function anagrams2(stringA: string, stringB: string) {
    return clean(stringA) === clean(stringB);
}
function clean(str: string) {
    return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}
const isAnaagram2 = anagrams2('rail safety', 'fairy tales');
console.log('solution2 is anagram? ',isAnaagram2);