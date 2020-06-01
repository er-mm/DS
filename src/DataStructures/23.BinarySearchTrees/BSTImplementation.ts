// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// structure: 
/**
 * 			  10
 * 			/	\
 * 		   0	12
 * 		  / \	/ \
 * 		-1   5 11  20
 * 				   /\
 * 				 17  99
 */

export default class BSTNode {
	public data: any;
	public leftNode: any;
	public rightNode: any;
	constructor(data: any) {
		this.data = data;
		this.leftNode = null;
		this.rightNode = null;
	}

	insert(data: any) {
		/**
		 * to insert any data we first check 
		 * if it is small or greater then root node.
		 * then accordingly we will move to the node and check if the node exist
		 * then do the same thing until u find any node to which right or left is null. 
		 * when you find that add a node to that position.
		 * to handle this use recursion.
		 */
		if (data < this.data && this.leftNode) { // case 1 :  when data is less travel to left side
			this.leftNode.insert(data);
		} else if (data < this.data) { // case 2 : when you find the left node to null
			this.leftNode = new BSTNode(data)
		} else if (data > this.data && this.rightNode) { // case 3: when data is greater, travel to right side
			this.rightNode.insert(data);
		} else if (data > this.data) { // case 4 : when you find the right node to null
			this.rightNode = new BSTNode(data);
		}
	}

	contains(data: any) {
		if (data === this.data) return this;
		if (data < this.data && this.leftNode) {
			return this.leftNode.contains(data); //If this function call ends up returning a value we'll make sure that we return it back from the overall function call.
		} else if (data > this.data && this.rightNode) {
			return this.rightNode.contains(data);
		} else {
			return null;
		}
	}
	/**
	 * Now remember with recursion we do have to make sure that we return any recursive function call because
	if this function call right here ends up returning a value then the overall function call needs to return
	it as well.
	 */
	// --- Directions
	// Given a node, validate the binary search tree,
	// ensuring that every node's left hand child is
	// less than the parent node's value, and that
	// every node's right hand child is greater than
	// the parent
	isValidBST(node: any, min: any = null, max: any = null) {
		if (max !== null && node.data > max) return false;
		if (min !== null && node.data < min) return false;
		if (node.leftNode && !this.isValidBST(node.leftNode, min, node.data)) return false;
		if (node.rightNode && !this.isValidBST(node.rightNode, node.data, max)) return false;
		return true;
	}
}

const bst = new BSTNode(10);
// bst.leftNode = new BSTNode(0);
// bst.rightNode = new BSTNode(12);
// bst.leftNode.leftNode = new BSTNode(22);
// bst.leftNode.rightNode = new BSTNode(5);
// bst.rightNode.leftNode = new BSTNode(11);
// bst.rightNode.rightNode = new BSTNode(20);
// bst.rightNode.rightNode.leftNode = new BSTNode(17);
// bst.rightNode.rightNode.rightNode = new BSTNode(99);
// now we will create tree using insert
bst.insert(0);
bst.insert(12);
bst.insert(-1);
bst.insert(5);
bst.insert(11);
bst.insert(20);
bst.insert(17);
bst.insert(99);
bst.insert(-20);
bst.insert(15);
console.log(bst.isValidBST(bst));
