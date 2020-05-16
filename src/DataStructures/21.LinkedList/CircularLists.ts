
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

import LinkedList from "./LinkedList";
import Node from "./Node";

function circular(list: LinkedList) {
	let slow = list.head;
	let fast = list.head;

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;

		if(slow === fast) return true;
	}
	return false;
}

const list = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
list.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(list)); // true