import LinkedList from "./LinkedList";
import Node from "./Node";

//example - constructor
console.log('*****constructor****')
const list = new LinkedList();
console.log(list); // LinkedList { head: null }

// example insertFirst
console.log('*****insertFirst****')
list.insertFirst(10);
console.log(list); // LinkedList { head: Node { data: 10, next: null } }
list.insertFirst(20);
list.insertFirst(30);
console.log(list); // LinkedList {head: Node { data: 20, next: Node { data: 10, next: null } } }

// example size
console.log('*****size****')
console.log(list.size()); // 2

// getFirst
console.log('*****getFirst****')
console.log(list.getFirst()); // Node { data: 20, next: Node { data: 10, next: null } }

// getLast
console.log('*****getLast****')
console.log(list.getLast()); // Node { data: 10, next: null }

// clear
console.log('*****clear****')
// list.clear();
// console.log(list);

// removeFirst
console.log('*****removeFirst****')
// console.log(list.removeFirst());

// removeLast
console.log('*****removeLast****')
// list.removeLast();
console.log(list);

//insertLast
console.log('*****insertLast*****');
list.insertLast(40);
console.log(list.size());

//getAt
console.log('*****getAt*****');
console.log(list.getAt(3));

//removeAt
console.log('*****removeAt*****');
list.removeAt(2);
console.log(list.size());

//insertAt
console.log('*****insertAt*****');
list.insertAt(60, 2);
console.log(list.getLast());


/**
 * forEach with linkedlist
 * Argument -> function
 * directions -> Calls the provided function with every node of the chain
 * example
 * const list = new List();
	list.insertLast(1);
	list.insertLast(2);
	list.insertLast(3);
	list.insertLast(4);
	list.forEach(node => {
	node.data += 10;
	});
	list.getAt(0); // Returns node with data '11'
 */
console.log('*****iterations*****');
const listForForEach = new LinkedList();
listForForEach.insertLast(1);
listForForEach.insertLast(2);
listForForEach.insertLast(3);
listForForEach.insertAt(4, 0);
// I want add 10 to every element in linkedlist

// forEach
// listForForEach.forEach((node:any)=> {
// 	node.data += 10
// });

// for of
// for(let node of listForForEach) {
// 	node.data += 10;
// 	console.log(node);
// }
console.log(listForForEach);

console.log('*****reverse******');
listForForEach.reverse();
console.log(listForForEach);
console.log(listForForEach.head.next);
console.log(listForForEach.head.next.next);
console.log(listForForEach.head.next.next.next);