// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
import LinkedList from "./LinkedList";

function midPoint(list: LinkedList) {
	// catch: use two variables slow and fast slow will increment to 1 and fast will increment to 2
	let slow = list.head;
	let fast = list.head;

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

const list = new LinkedList();
list.insertLast('a')
list.insertLast('b')
list.insertLast('c')
list.insertLast('d')
list.insertLast('e')
list.insertLast('f')
console.log(midPoint(list)); // returns { data: 'b' }

// we can do the same thing in arrays. 
const arr = [1, 2, 3, 1, 0, 0, 0, 0]
function midPointWithArrays(arr: number[]) {
	let fast = 0;
	let slow = 0;
	while (arr[fast + 1] !== undefined && arr[fast + 2] !== undefined) {
		fast = fast + 2;
		slow = slow + 1;
	}
	return arr[slow];
}

const midPointNumber = midPointWithArrays(arr);
console.log(midPointNumber);