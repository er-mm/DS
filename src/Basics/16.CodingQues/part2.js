// Run Length - Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. 
This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.
 For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 

function RunLength(str){
    var res = '';
    var c = 1;
for (i=0;i<str.length;i++){
    if (str[i+1] == str[i]) {
        c++;
    } else {
        res = res + c + str[i];
        c=1;}
}
return res;
}
RunLength("wwwggopp");
____________________________________________________________________________________________________________________________________________________________________________

// Bracket Matcher - Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1. 
//WILL'S
function BracketMatcher(str) { 
  var lP = 0;
  var rP = 0;
  for(var i=0;i<str.length;i++){
    if(str[i] === '(') lP++;
    if(str[i] === ')') rP++;
    if(rP > lP) return 0; //the Key part
  }
  if(rP === lP) return 1;
  return 0;
}
____________________________________________________________________________________________________________________________________________________________________________
// Given a number 3digit and a number to insert - insert in that position where the whole number become greater.

function greatestNumber(number, numberToInsert) {
 const newArr = [];
  let isTrue = true;
  number
    .toString()
    .split('')
    .forEach((numValue) => {
      if(numberToInsert > Number(numValue) && isTrue) {
        newArr.push(numberToInsert);
        isTrue = !isTrue;
      }
    newArr.push(Number(numValue));
  })
  if(newArr.length === number.toString().length) newArr.push(numberToInsert);
  return Number(newArr.join(''))
}


const number = 899;
const numberToInsert = 6;

console.log(greatestNumber(number, numberToInsert))
____________________________________________________________________________________________________________________________________________________________________________
create deep object 


function deep (prop, value) {
  
  let arr=  [];
  let i = 0;
  
  while(i < prop.length){
    let result = {};
    let temp = result;
    
    let splitProp = prop[i].split('.');
    let splitPropLen = splitProp.length;
    
    for(let j=0; j<splitPropLen; j++){
      if(j === splitPropLen-1){
        temp[splitProp[j]] = value[i];
      } else {
         temp = temp[splitProp[j]] = {};
      }
    }
    
    arr.push(result)
    i++;
  } 
  console.log(arr);
}
deep(['a.b.c', 'c.d.e'], [1,2]);

// output
// [{a: {b: {c:1}}}, {c: {d: {e:2}}}]
____________________________________________________________________________________________________________________________________________________________________________

let val = 'abbacdd';
let str = val.split('').sort();
console.log(str.join(''))
var res = '';
    var c = 1;
for (i=0;i<str.length;i++){
    if (str[i+1] == str[i]) {
        c++;
    } else {
        res = res + str[i] + c;
        c=1;}
}
console.log(res)


____________________________________________________________________________________________________________________________________________________________________________

let str = 'abc_def'
let arr = []
for (let i=0; i<str.length; i++) {
  if(str[i] === '_') {
    arr.push(str[i+1].toUpperCase());
    i++;
  } else arr.push(str[i])
}
console.log(arr.join(''))

____________________________________________________________________________________________________________________________________________________________________________
let arr = [1,2,1]
let len = arr.length /2
let count = arr.sort((a,b)=>a-b);
let map = {};
for(let c of count){
  map[c] = map[c] + 1 || 1
}
console.log(map)

let res = -1
for(let val in map) {
  if(len%2 === 0) {
    if(map[val] > len) {
      res = val;
    }
  } else if(map[val] >= len){
    
      res = val;
  } 
}

console.log(res)

____________________________________________________________________________________________________________________________________________________________________________
var a = 'I am Mayank Mittal.'

f3 =(a)=>[...a].reverse().join('');
____________________________________________________________________________________________________________________________________________________________________________
check braces = ['[{()}]','[{)}]'
function check(expr){
    const holder = []
    const openBrackets = ['(','{','[']
    const closedBrackets = [')','}',']']
    for (var letter of expr) { 
        if(openBrackets.includes(letter)){ 
            holder.push(letter)
        }else if(closedBrackets.includes(letter)){ 
            const openPair = openBrackets[closedBrackets.indexOf(letter)] 
             if(holder[holder.length - 1] === openPair){ 
                holder.splice(-1,1) 
            }else{ 
                holder.push(letter) 
                break 
            } 
        }
    }
    return (holder.length === 0)
}

console.log(check('[[{}]]'))
____________________________________________________________________________________________________________________________________________________________________________
n people, k groups
function f(n, k){
  let dp = new Array(n + 1)
  for (let i=0; i<n+1; i++)
    dp[i] = new Array(k + 1).fill(0)
  dp[0][0] = 1
  
  for (let i=1; i<=n; i++)
    for (let j=1; j<=Math.min(i, k); j++)
      dp[i][j] = dp[i - j][j] + dp[i - 1][j - 1]

  return dp[n][k]
}

console.log(f(1000, 10))

memoised option: 
function f(n, k, memo={}){
  if (k == 0 && n == 0)
    return 1

  if (n <= 0 || k <= 0)
    return 0

  let key = String([n, k])

  if (memo.hasOwnProperty(key))
    return memo[key]

  return memo[key] = f(n - k, k, memo) + f(n - 1, k - 1, memo)
}

console.time('time taken')
console.log(f(1000, 10))
console.timeEnd('time taken')
____________________________________________________________________________________________________________________________________________________________________________
put 0 to end of array
let arr = [1,0,5,4,0,4,2,0,5,7,7,0,9,2];
let idx=0
for(let i=0; i<arr.length;i++){
  if(arr[i]) {
    arr[idx] = arr[i]
    idx++;
  }
}
console.log(arr.length)
console.log(idx)
console.log(arr)
while(idx<arr.length){
  arr[idx] = 0;
  idx++;
}

console.log(idx)
____________________________________________________________________________________________________________________________________________________________________________
Create map function 
let arr = [1,2,3];

Array.prototype.myMap = function(callback){
  let a = this;
  let newArr=[];
  
  for(let i=0; i<a.length; i++){
    newArr.push(callback(a[i], i, a))
  }
   return newArr;
  
  
}

console.log(arr.myMap((value)=> value*value))
____________________________________________________________________________________________________________________________________________________________________________
Create String reverse function in protoype
let str = "varun";
// let str1 = "mm";
// let res = str.split('').reverse().join('_');
// console.log(res)

String.prototype.myReverse = function(){
  console.log(this)
  return this.split('').reverse().join('_');
}

console.log(str.myReverse())