`   _________    _________
    |____|__|--->|____|__|--->null
    data  next    data  next
        node1       node2`
// next has the reference to the next node. 
// reference to the last node is always null.
// Refer LinkedList1.PNG and LinkedList2.PNG from assets

const nodeOne: any = {
	data: 123
};

const nodeTwo = {
	data: 456
}

console.log(nodeOne.next);
console.log(nodeOne.next = nodeTwo);
console.log(nodeOne); // { data: 123, next: { data: 456 } }

// --- Directions
// Implement classes Node and Linked Lists
// See 'DirectionsForLinkedList.html' document

// class Node {}

// class LinkedList {}
