/**
 * OUEUE - > Ticket Counter :D
 * The process of entring in Queue is Enqueing or adding
 * exiting from other end -> dequeuing 0r removing
 * Works on FIFO principal -> First In First out
 * 
 * To Implement we will use JS Array methods like
 * unshift() to add element in Queue
 * pop() to remove the element 
 * ******************************************************
 * Will a=make a class called Queue and put in methods 
 * like add and remove and will implement those method. 
 * 
 * To Run this will have to 
 * 1. Create a new empty Queue -> const q = new Queue();
 * 2. Add a record to it -> q.add(1);
 * 3  Remove record at the end of a queue -> q.remove(); // returns 1;
 * 
 */

export default class Queue {
	private data: any[];
	// will create array here
	constructor() {
		this.data = [];
	}

	add(record: any): void {
		this.data.unshift(record);
	}

	remove(): any {
		return this.data.pop();
	}

	showList(): any[] {
		return this.data;
	}

	peek(): any {
		return this.data[this.data.length - 1]
	}
}

// const q = new Queue();
// q.add(1); 
// q.add(2);
// console.log(q.remove());

// to implement in any other file.
// import Queue from "../17.QueueDS/ImplementingQueue";
// const q = new Queue();
// q.add(1); 
// q.add(2);
// console.log(q.showList());
// console.log(q.remove());
// console.log(q.showList());