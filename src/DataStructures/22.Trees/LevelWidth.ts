// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//	     1		1 element so width is 1
//	   / |  \
// 	2   3   4	3 elements so width is 3
// 	/|\       |
// 5 6 7      8		4 elements so width is 4
// Answer: [1, 3, 3]
import Node from './NodeImplementationForTree';
import Tree from './TreeImplementation';

function levelWidth(root: any) {
	let counters= [0];
	let stopper = 'stop';
	let arr = [root, stopper];

	while(arr.length !== 1) {
		const node = arr.shift();
		if(node === stopper) {
			arr.push(stopper);
			counters.push(0);
		} else {
			counters[counters.length-1]++;
			arr.push(...node.children);
		}
	}
	return counters;
}

const node = new Node(1);
node.add(2);
node.add(3);
node.add(4);
node.children[0].add(5);
node.children[0].add(6);
node.children[0].add(7);
node.children[2].add(8);
const tree = new Tree();
tree.root = node;
console.log(tree);
console.log('width',levelWidth(tree.root));