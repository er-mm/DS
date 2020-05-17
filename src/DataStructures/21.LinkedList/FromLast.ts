// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

import LinkedList from "./LinkedList";
import Node from "./Node";

function fromLast(list: LinkedList, n: number): Node {
	let slow = list.head;
	let fast = list.head;
	// catch: initially we move fast to n numbers fwd and then we go through the slow and fast one step each.
	// that means when fast is pointing to null, the slow is pointing n nodes behind the fast.'
	// because initially we move fast n spaces to the slow. 
	// while (fast.next) {
	// 	if (n <= 0) slow = slow.next;
	// 	fast = fast.next;
	// 	n--;
	// }
	// or
	while (n > 0) {
		fast = fast.next;
		n--;
	}
	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}
	return slow;
}

const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
console.log(fromLast(list, 2)) // 'b'