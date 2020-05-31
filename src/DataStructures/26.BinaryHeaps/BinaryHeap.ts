/**
 * WHAT IS A BINARY HEAP?
	Very similar to a binary search tree, but with some different rules!
	In a MaxBinaryHeap, parent nodes are always larger than child nodes. 
	In a MinBinaryHeap, parent nodes are always smaller than child nodes
 */
/**
 * MAX BINARY HEAP
	Each parent has at most two child nodes
	The value of each parent node is always greater than its child nodes
	In a max Binary Heap the parent is greater than the children, 
		but there are no guarantees between sibling nodes.
	A binary heap is as compact as possible. 
	All the children of each node are as full as they can be and left children are filled out first
 * 
 */

/**
 * Why do we need to know this?
   Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
   They are also used quite a bit, with graph traversal algorithms
   We'll come back to this!
 */
// Adding to a MaxBinaryHeap
// Add to the end
// bubbleUp

class BinaryHeap {
	public data: any[];
	constructor() {
		this.data = []
	}

	insert(data: any) {
		this.data.push(data);
		this.bubbleUp()
	}
	// child nodes are  2n+1 and 2n+2 times after the parent node where n is the index of parent node
	// parent node is Math.Floor((n-1)/2) times before the child node where n is index of childNode
	bubbleUp() {
		let childIdx = this.data.length - 1;
		let childData = this.data[childIdx];
		while (childIdx > 0) {
			let parentIdx = Math.floor((childIdx - 1) / 2);
			let parentData = this.data[parentIdx];
			if (parentData > childData) break;
			[this.data[parentIdx], this.data[childIdx]] = [this.data[childIdx], this.data[parentIdx]];
			childIdx = parentIdx;
		}
	}
	// Removing From Heap
	// Remove the root -> Replace with most recently added -> Adjust (sink down)
	extract() {
		this.data.shift();
		const lastEle = this.data.pop();
		this.data.unshift(lastEle);
		this.sinkDown();
	}

	sinkDown() {
// breaked code
		let parentIdx = 0;
		let parentdata = this.data[0];
		

		while (parentIdx < this.data.length - 1) {
			let leftChild, rightChild;
			let leftchildIdx = 2 * parentIdx + 1;
			let rightchildIdx = 2 * parentIdx + 2;

			if (leftchildIdx < this.data.length) leftChild = this.data[leftchildIdx];
			if (rightchildIdx < this.data.length) rightChild = this.data[rightchildIdx];
			if (!(leftChild > parentdata || rightChild > parentdata)) break;
			console.log('left right this.data[parentIdx]->',leftChild,rightChild, this.data[parentIdx])
			if (leftChild > rightChild) {
				// [leftChild, this.data[parentIdx]] = [this.data[parentIdx], leftChild]
				const temp = this.data[parentIdx];
				this.data[parentIdx] = leftChild
				leftChild = this.data[parentIdx];
				parentIdx = leftchildIdx;
			} else {
				[rightChild, this.data[parentIdx]] = [this.data[parentIdx], rightChild]
				parentIdx = leftchildIdx;
			}
			console.log(this.data)
		}
	}
}

const heap = new BinaryHeap();
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(39);
heap.insert(33);
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(45);
console.log(heap);
heap.extract();
console.log(heap);