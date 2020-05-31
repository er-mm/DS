export default class PQ {
	public values: any;
	constructor() {
		this.values = []
	}

	sort() {
		this.values.sort((a: any, b: any) => a.priority - b.priority);
	}

	enqueue(data: any, priority: number) {
		this.values.push({ data, priority });
		this.sort();
	}

	dequeue() {
		return this.values.shift();
	}
	// Notice we are sorting which is O(N * log(N))
}