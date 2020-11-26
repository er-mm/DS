
// WAP to find longest palindrome (length > 2) in a string
function longestPalindrome(str){
  const strArr = str.split(""); // abcbccbxxyxa
  let palindromicArr = [];
  strArr.forEach((value,key)=>{
    let temp = '';
    temp = value;
    const slicedStrArr = strArr.slice(key+1,strArr.length);
    slicedStrArr.forEach((value,key)=>{
      temp += value;
      if(temp.length > 2 && checkPalindrome(temp) && !palindromicArr.includes(temp)) palindromicArr.push(temp);
    });
  });
  return palindromicArr.sort((a,b)=>b.length-a.length).filter((str,key,arr)=>{
    if(arr[0].length === str.length) return str;
  })
}

function checkPalindrome(temp) {
  return temp === temp.split("").reverse().join("");
}

console.log(longestPalindrome("xxx1x12321bbbbb"));
_______________________________________________________________________________________________________________________________________________

//TimeConvert = convert minutes(95) to hours:minutes
function TimeConvert(num) { 
var hours = Math.floor(num / 60);
var minutes = num % 60;
	return hours + ":" + mins;
}
TimeConvert(95); //35 minutes    
______________________________________________________________________________________________________________________________________________

// ALphabet Soup - alphabetize a string's chars  
//Re-Write without Methods...
function AlphabetSoup(str) { 
  var res=[];
  for(var i=0; i < str.length; i++) {
    res.push(str[i]);
  }
  return res.sort().join('');       
}
	
//Methods
function AlphabetSoup(str){
return str.split('').sort().join('');       
}

console.log(AlphabetSoup("hfdggreg")); 
_______________________________________________________________________________________________________________________________________________

// VOWEL COUNT - Return the number of vowels in the string
function VowelCount(str) { 
count = null;
for(i=0;i<str.length;i++) {
    if (str[i]=='a' | //or use /a|e|i|o|u/g.test(str[i])
        str[i]=='e' |
        str[i]=='i' |
        str[i]=='o' |
        str[i]=='u') {
       count++;
    }
}
  return count; 
}

*//REGEX
function VowelCount(str) {
  return str.match(/[aeiou]/g).length;       
}
_____________________________________________________________________________________________________________________________________________

// AB Check  - Return true if the characters a and b are separated by exactly 3 places at least once, Otherwise return the string false. 
function ABCheck(str) {  //question doesn't ask for all cases of a...b or like "a000b a1234b" but would be nice to write a REGEX for that
	function ABCheck(str) {  
	var reg2 = /b...a/;
	var reg = /a...b/;
		if (reg.test(str)){
		    return true;
		} else if (reg2.test(str)){
		    return true;
		} else {
		    return false;
		}
	}
	OR return reg.test(str) || reg2.test(str);
}
_____________________________________________________________________________________________________________________________________________

//Ex Oh - returne true if there's an equal amount of x's and o's , "xooxxxxooxo" returns false
function ExOh(str) {
  // str.match(/x/g) - gives array contains x
return str.match(/x/g).length == str.match(/o/g).length;
}

console.log(ExOh("xooxxxxoooxo")); 
_____________________________________________________________________________________________________________________________________________

//.Arith Geo - Return "arithmetic" if the #'s follow an arithmetic sequence, return "gemoetric" if the #'s follow a geometric sequence. 
[2, 4, 6, 8] and or [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. */
//Arith Geo - 2 More Functions
function ArithGeo(arr){
	return IsArith(arr) || IsGeom(arr) || -1;   
}

function IsArith(arr){
var arith = arr[1] - arr[0];
for (i=2; i<arr.length; i++){
    if (arr[i] - arr[i-1] !== arith) return false;
}
return true; //for my alternative answer below, this would return 'arithmetic'
}

function IsGeom(arr){
geom = arr[1] / arr[0];
for (i=2; i<arr.length; i++){
    if (arr[i] / arr[i-1] !== geom) return false;
}
return true;
}
console.log(ArithGeo([2,4,6,8]));
_____________________________________________________________________________________________________________________________________________
Debouncing: 
// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);

<input type="text" onkeyup="betterFunction()"/>

_____________________________________________________________________________________________________________________________________________
Throttling: 
const loggerFunc = () => {
  console.count("Throttled Function");
}

const throttle = (fn, limit) => {
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    if(flag){
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag=true;
      }, limit);
    }
  }
}

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize",betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function 
const normalFunc = () => {
  console.count("Normal Function");
}

window.addEventListener("resize",normalFunc);

_____________________________________________________________________________________________________________________________________________
sum(1)(2)(3)(4)..( n)()

let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());
_____________________________________________________________________________________________________________________________________________

const arr = [[1, 2, 4], 45, 41, [9, 3, 5, [123, 456]], [2, 1], [5, 6, 3, 9], 10, 11, [12, 13, 19]];
// get the max value out of it 
let max = 0;
const getMaxVal  = (arr) => {
    for(let i = 0; i< arr.length; i++){
        if(Array.isArray(arr[i])) getMaxVal(arr[i]);
        if(arr[i] > max) max = arr[i]
    }
    return max;
}

const maxVal = getMaxVal(arr);

console.log(maxVal); // 456




