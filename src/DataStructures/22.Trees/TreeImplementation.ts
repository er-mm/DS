import Node from './NodeImplementationForTree';

export default class Tree {
	public root: any;
	constructor() {
		this.root = null;
	}

	// breadth First Traversal Implementation
	traverseBF(fn: Function) {
		const rootNode = this.root;
		const tempArr = [rootNode]; // add root node to the array
		while (tempArr.length) {
			// take the first element from the array
			const node = tempArr.shift();
			console.log(node.data);
			// take the children of that node and push it into tempArr
			tempArr.push(...node.children); //**push at the end */
			// take the node to the function for further processing; 
			fn(node);
		}
	}

	// depth First Traversal Implementation
	traverseDF(fn: Function) {
		const rootNode = this.root;
		const tempArr = [rootNode];
		while (tempArr.length) {
			const node = tempArr.shift();
			console.log(node.data);
			tempArr.unshift(...node.children); //**push at the begning */
			fn(node);
		}
	}
}

// const node = new Node(1);
// node.add(2);
// node.add(3);
// node.add(4);
// node.children[0].add(5);
// node.children[0].add(6);
// node.children[0].add(7);
// node.children[2].add(8);
// const tree = new Tree();
// tree.root = node;
// console.log(tree);
// console.log('after BFT');
// tree.traverseBF((node: Node) => node.data += 10);
// console.log(tree);
// console.log('after DFT');
// tree.traverseDF((node: Node) => node.data += 20);
// console.log(tree);