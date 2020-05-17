
// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'. -- Node Implementation.ts
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null. --- tree Implementation.ts
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree -- TraverseTreeByBFT and DFT . ts files. 

export default class Node {
	public data: any;
	public children: any[];

	constructor(data: any) {
		this.data = data;
		this.children = [];
	}

	add(data: any) {
		this.children.push(new Node(data));
	}

	remove(data: any){
		this.children = this.children.filter((node: any) => node.data !== data);
	}
}

// const node = new Node(123);
// console.log(node);
// node.add(456);
// console.log(node);
// node.add(789);
// console.log(node);
// node.remove(456);
// console.log(node);
