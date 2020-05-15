// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
// stack + stack = queue

import Stack from "../19.StackDS/Stack";

class Queue {
	private s1: Stack;
	private s2: Stack;
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	add(record: any) {
		this.s1.add(record);
	}

	remove() {
		while (this.s1.peek()) {
			this.s2.add((this.s1.remove()))
		}
		const record = this.s2.remove();
		while (this.s2.peek()) {
			this.s1.add(this.s2.remove())
		}
		return record;
	}

	peek() {
		while (this.s1.peek()) {
			this.s2.add(this.s1.remove())
		}
		const record = this.s2.peek();
		while (this.s2.peek()) {
			this.s1.add(this.s2.remove())
		}
		return record;
	}
}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek());  // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2
