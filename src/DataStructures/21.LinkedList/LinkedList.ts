/**
* LinkedList Class API
*/
import Node from "./Node";

export default class LinkedList {
	/**
	*Function	-> .constructor	  (Used to initialize a linkedlist)
	*Arguments	-> -	
	*Returns		-> LinkedList
	*Directions	
	*Create a class to represent a linked list.
	* When created, a linked list should have *no* head node associated with it.
	* The LinkedList instance will have one property, 'head', which is a **reference to the first node of the linked list**.
	* By default 'head' should be 'null'.
	*Example : 
	*const list = new LinkedList();
	*list.head // null
	* Refer LinkedListConstructor.PNG from assets
	 */
	public head: any;
	constructor() {
		this.head = null;
	}

	/**
	*Function	-> .insertFirst	  
	*Arguments	-> -	data
	*Returns		->  - 
	*Directions	
	*Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property
	* Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.
	*Example : 
	*const list = new LinkedList();
	*list.insertFirst('Hi There'); // List has one node
	* refer LinkedListInsertFirst.PNG
	 */
	insertFirst(data: any) {
		// if we dont have data it will pioint to head but if we have data this.head will point to latest data 
		// and the old data will shift forwards 
		this.insertAt(data, 0);
		// or
		// this.head = new Node(data, this.head); 

	}

	/**
	*Function	-> .size	  
	*Arguments	-> -	-
	*Returns		->  - integer
	*Directions	
	*Returns the number of nodes in the linked list..
	*Example : 
	*const list = new LinkedList();
	*list.insertFirst('a');
	*list.insertFirst('b');
	*list.insertFirst('c');
	*list.size(); // returns 3
	 */
	size(): number{
		let counter = 0;
		let node = this.head; // point head to node.
		// this node  variable contains 
		// LinkedList {head: Node { data: 20, next: Node { data: 10, next: null } } }
		// this type of data 
		// will calculate the next of the node and assign it back to node till the next becomes null
		while(node) {
			counter++;
			node = node.next;
		}
		return counter;
	}

	/**
	*Function	-> .getFirst	  
	*Arguments	-> -	-
	*Returns		->  - Node
	*Directions	
	*Returns the first node of the linked list.
	*Example : 
	*const list = new LinkedList();
	*list.insertFirst('a');
	*list.insertFirst('b');
	*list.getFirst(); // returns Node instance with data 'b' 
	*/
	getFirst(): Node {
		return this.getAt(0); // reusability
		// or
		// return this.head; // returns Node instance with data '20'
	}

	/**
	*Function	-> .getLast	  
	*Arguments	-> -	-
	*Returns		->  - Node
	*Directions	
	*Returns the last node of the linked list
	*Example : 
	*const list = new LinkedList();
	*list.insertFirst('a');
	*list.insertFirst('b');
	*list.getFirst(); // returns Node instance with data 
	*/

	getLast() {
		if(!this.head) return null;
		let node = this.head;
		// let next = node;
		// while(next){
		// 	node = next;
		// 	next = next.next;
		// }
		// return node;
		//or
		while(node.next){
			node = node.next;
		}
		return node;
		// or
		// while (node) {
		// 	if (!node.next) {
		// 		return node;
		// 	}
		// 	node = node.next;
		// }

		// or for reusability just one line
		// return this.getAt(this.size() - 1);
	}

	/**
	*Function	-> .clear	  
	*Arguments	-> -	-
	*Returns		->  - 
	*Directions	
	*Empties the linked list of any nodes
	*Example : 
	*const list = new LinkedList();
	*list.insertFirst('a');
	*list.insertFirst('b');
	*list.clear();
	*list.size(); // returns 0	
	*/
	clear() {
		this.head = null;
	}

	/**
	*Function	-> .removeFirst	  
	*Arguments	-> -	-
	*Returns		->  - 
	*Directions	
	*Removes only the first node of the linked list.
	*The list's head should now be the second element.
	*Example : 
	*const list = new LinkedList();
	*list.insertFirst('a');
	*list.insertFirst('b');
	*list.removeFirst();
	*list.getFirst(); // returns node with data 'a'
	*/
	removeFirst(){
		if(!this.head) return null;
		let node = this.head;
		return node.next;
		// or
		// return this.head.next
		// or for reusability
		// return this.removeAt(0)
	}

	/**
	*Function	-> .removeLast	  
	*Arguments	-> -	-
	*Returns		->  - 
	*Directions	
	*Removes the last node of the chain.
	*Example : 
	*const list = new LinkedList();
	list.insertFirst('a');
	list.insertFirst('b');
	list.removeLast();
	list.size(); // returns 1
	list.getLast(); // returns node with data of 'b'
	*/
	removeLast(){
		if(!this.head) return; // if the list is empty
		if(!this.head.next) {  // if we have 1 node
			this.head = null;
			return;
		}

		let prevNode = this.head;
		let nextNode = prevNode.next;

		while(nextNode.next){
			prevNode = nextNode;
			nextNode = nextNode.next;
		}
		prevNode.next = null;

		// or for reusability
		//this.removeAt(this.size() - 1);
	}

	/**
	*Function	-> .insertLast	  
	*Arguments	-> -	Data-
	*Returns		->  - 
	*Directions	
	*Inserts a new node with provided data at the end of the chain
	*Example : 
	*const list = new LinkedList();
	list.insertFirst('a');
	list.insertFirst('b');
	list.insertLast('c');
	list.getLast(); // returns node with data 'C'
	*/
	insertLast(data: any){
		const node = new Node(data);
		if(!this.head) this.head = node;
		else this.getLast().next = node;

		// or for reusability
		// this.insertAt(data, this.size())
	}

	/**
	*Function	-> .getAt	  
	*Arguments	-> -	integer-
	*Returns		->  - Node
	*Directions	
	*Returns the node at the provided index
	*Example : 
	*const list = new List();
	list.insertFirst('a');
	list.insertFirst('b');
	list.insertFirst('c');
	list.getAt(1); // returns node with data 'b'
	*/
	getAt(n: number){
		// if(!this.head) return null; // unnecessary
		// if(n == this.size()+1) return;
		let node = this.head;
		let counter = 0;
		while(node){
			if(counter === n) return node;
			counter++;
			node = node.next;
		}
		return null;
	}

	/**
	*Function	-> .removeAt	  
	*Arguments	-> -	integer-
	*Returns		->  - 
	*Directions	
	*Removes node at the provided index
	*Example : 
	*const list = new List();
	list.insertFirst('a');
	list.insertFirst('b');
	list.insertFirst('c');
	list.removeAt(1);
	list.getAt(1); // returns node with data 'a'
	*/
	removeAt(n: number){
		if(!this.head) return null;
		if(n === 0) {
			this.head = this.head.next;
			// or
			//this.removeFirst(); // or this.head = this.head.next
			return;
		}
		let prevNode = this.getAt(n - 1);
		if(!prevNode || !prevNode.next) return; // // to handle index greater that size of linkedlist
		prevNode.next = prevNode.next.next;
		
	}

	/**
	*Function	-> .insertAt	  
	*Arguments	-> -	Data, integer-
	*Returns		->  - 
	*Directions	
	*Create an insert a new node at provided index. 
	If index is out of bounds, add the node to the end of the list.
	*Example : 
	*const list = new List();
	list.insertFirst('a');
	list.insertFirst('b');
	list.insertFirst('c');
	list.insertAt('Hi', 1)
	list.getAt(1); // returns node with data 'Hi'
	*/
	insertAt(data: any, n: number){
		let newNode = new Node(data);
		if(!this.head) {
			this.head = newNode;
			return;
		}
		if(n === 0) {
			this.head = new Node(data, this.getAt(n));
			//or 
			//this.insertFirst(data);
			return;
		}
		const prevNode = this.getAt(n - 1) || this.getLast();
		const node = new Node(data, prevNode.next);
		prevNode.next = node;
		// or
		// if(!this.getAt(n)) {
		// 	this.getLast().next = newNode;
		// 	return;
		// }
		// let prevNode = this.getAt(n-1);
		// prevNode.next = new Node(data, this.getAt(n));
	}
	// head->4 1 2 3
	reverse() {
		let node  = this.head;
		this.head = this.getAt(this.size()-1);
		let next;
		let prev = null;
		while(node){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
	}

	forEach(fn: Function) {
		let node = this.head;
		let counter = 0;
		while(node){
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node){
			yield node;
			node = node.next;
		}
	}

}

/**
 * We can reuse the code of linked list like
 * insertFirst(data) => insertAt(data,0)
 * insertLast(data) => insertAt(data, this.size()-1)
 * removeFirst() => removeAt(0)
 * removeLast() => removeAt(this.size()-1)
 * getFirst() => getAt(0)
 * getLast() => getAt(this.size()-1)
 */
