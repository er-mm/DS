/**
* Node Class API
*Function	-> Node.constructor	
*Arguments	-> (Data, Node)	
*Returns		-> Node
*Directions	
*Creates a class instance to represent a node.
*The node should have two properties, 'data' and 'next'. 
*Accept both of these as arguments to the 'Node' constructor,
*then assign them to the instance as properties 'data' and 'next'.
* If 'next' is not provided to the constructor, then default its value to be 'null'.
*Example : 
*const n = new Node('There');
*n.data // 'Hi'
*n.next // null
*const n2 = new Node('Hi', n);
*n.next // returns n
*/
type NodeAndNull = Node | null;
export default class Node {
	public data: any;
	public next: NodeAndNull;
	constructor(data: any, next: NodeAndNull = null) {
		this.data = data;
		this.next = next;
	}
}

// const n = new Node('There');
// console.log(n.data) // 'There'
// console.log(n.next) // null
// const n2 = new Node('Hi', n);
// console.log(n) // Node { data: 'There', next: null }
// console.log(n2) // Node { data: 'Hi', next: Node { data: 'There', next: null } }