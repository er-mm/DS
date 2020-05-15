/**
 * generators read from javascript.info
 * Practical usage example
 */

export default class Tree {
	public value: any;
	public children: any[];
	constructor(value: any = null, children: any[] = []) {
		this.value = value;
		this.children = children;
	}

	*printValues() {
		yield this.value;
		for (let child of this.children) {
			yield* child.printValues();
		}
	}
}

const tree = new Tree(1, [
	new Tree(2, [new Tree(4)]),
	new Tree(3)
]);

const values = [];
for (let value of tree.printValues()) {
	values.push(value);
}

console.log(values);