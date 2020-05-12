// Chunks
/**
 * Given an array and chunk size, divide the array into any subarrays
 * where each subarray is of length size
 * ---Example
 * chunk([1,2,3,4,5],2) = [[1,2],[3,4],[5]]
 * chunk([1,2,3,4,5],4) = [[1,2,3,4],[5]]
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3
function chunk1(array: number[], size: number) {
    // my solution
    const chunked: number[][] = [];
    let count = 0;
    let tempArr: number[] = [];
    array.forEach(ele => {
        tempArr.push(ele);
        count++;
        if (count >= size) {
            count = 0;
            chunked.push(tempArr)
            tempArr = []
        }
    })
    if (tempArr.length) chunked.push(tempArr);
    return chunked;
}
const arrayWithSubArrays1 = chunk1(array, chunkSize);
console.log('arrayWithSubArrays or chunks1 -> ', arrayWithSubArrays1);

//Solution2: algo
/**
 * 1. Create an empty array to hold chunks called 'chunked'
 * 2. For each element in the unchunked array - 
 *  2.1 retrieve the last element in chunked
 *  2.2 if last element doesn't exist OR its length === chunk size
 *      2.2.1 push  new chunk into the chunked array with current element
 *  2.3 else add the current element into the chunk
 * @param array 
 * @param size 
 * 
 */
function chunk2(array: number[], size: number) {
    const chunked: number[][] = [];
    array.forEach(ele => {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([ele])
        } else {
            last.push(ele);
        }
    })
    return chunked;
}
const arrayWithSubArrays2 = chunk2(array, chunkSize);
console.log('arrayWithSubArrays or chunks2 -> ', arrayWithSubArrays2);

//Solution3: algo : working with slice
/**
 * slice(startindex, endIndex); // NOT INCLUDING ENDiNDEX VALUE
 * 1. create empty chunked array
 * 2. create index start at 0
 * 3. while index is less than array.length
 * 4. push a slice of length 'size' from array into chunked
 * 5 . add size to index
 * @param array 
 * @param size 
 * 
 */
function chunk3(array: number[], size: number) {
    const chunked: number[][] = [];
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
const arrayWithSubArrays3 = chunk3(array, chunkSize);
console.log('arrayWithSubArrays or chunks3 -> ', arrayWithSubArrays3);