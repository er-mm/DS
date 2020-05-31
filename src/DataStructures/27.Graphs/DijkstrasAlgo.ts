// Used to find shortest path
// to find shortest path we need weighted graph. 
// to make weighted graph we need Graph class: 

import Graph from "./GraphImplementation";
import PQ from "./PriorityQueue";

export default class WeightedGraph extends Graph {
	addWeightedEdge(vertex1: any, vertex2: any, weight: number) {
		if (!(this.adjacencyList[vertex1] || this.adjacencyList[vertex2])) {
			console.log('None of the vertex', vertex1, vertex2, ' Exist');
			return;
		}
		if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
		if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	//The Approach to find shortest path
	// 	Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
	// Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
	// For each neighboring node, we calculate the distance 
	//		by summing the total edges that lead to the node we’re checking from the starting node.
	// If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

	// 	Dijkstra's Pseudocode
	// This function should accept a starting and ending vertex
	// Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list
	//  with a value of infinity, except for the starting vertex which should have a value of 0.
	// After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, 
	// except the starting vertex, which should have a priority of 0 because that's where we begin.
	// Create another object called previous and set each key to be every vertex in the adjacency list with a value of null

	// Start looping as long as there is anything in the priority queue
	// 		dequeue a vertex from the priority queue
	// 		If that vertex is the same as the ending vertex - we are done!
	// 		Otherwise loop through each value in the adjacency list at that vertex
	// 			Calculate the distance to that vertex from the starting vertex
	// 			if the distance is less than what is currently stored in our distances object
	// 				update the distances object with new lower distance
	// 				update the previous object to contain that vertex
	// 				enqueue the vertex with the total distance from the start node

	dijkstra(start: any, end: any) {
		if (!this.adjacencyList[start] || !this.adjacencyList[end]) {
			console.log(' Please write the correct vertex');
			return;
		}

		const pq = new PQ();
		const distances: any = {};
		const previous: any = {};
		const path = [];
		let smallest;

		// build initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				pq.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				pq.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}
		// as long as their is something to visit
		while (pq.values.length) {
			smallest = pq.dequeue().data; // give the vertex with lowest priority;
			if (smallest === end) {
				// we are done
				// build path
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			
			for (let neighbour in this.adjacencyList[smallest]) {
				// find the neighbouring node
				const neighboringNode = this.adjacencyList[smallest][neighbour];
				// calculate new distance to neighbouring node
				let newDistance = distances[smallest] + neighboringNode.weight;
				if (newDistance < distances[neighboringNode.node]) {
					distances[neighboringNode.node] = newDistance; // update new smallest distance in neighbour
					previous[neighboringNode.node] = smallest; // updating previous - how we got to neighbour
					pq.enqueue(neighboringNode.node, newDistance); //enqueue in priority queue with new priority
				}
			}
		}
		return path.concat(start).reverse();
	}
}

const wg = new WeightedGraph();
wg.addVertex('A');
wg.addWeightedEdge('A', 'B', 4);
wg.addWeightedEdge('A', 'C', 2);
wg.addWeightedEdge('B', 'E', 3);
wg.addWeightedEdge('C', 'D', 2);
wg.addWeightedEdge('C', 'F', 4);
wg.addWeightedEdge('D', 'E', 3);
wg.addWeightedEdge('D', 'F', 1);
wg.addWeightedEdge('E', 'F', 1);
console.log(wg.adjacencyList);

console.log(wg.dijkstra('A', 'E'));
// console.log(wg)
// const pq = new PQ();
// pq.enqueue('A', 5);
// pq.enqueue('B', 3);
// pq.enqueue('C', 4);
// pq.enqueue('D', 1);

// console.log(pq.values)