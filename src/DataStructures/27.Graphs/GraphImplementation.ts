export default class Graph {
	// make an adjacencyList
	public adjacencyList: any;
	constructor() {
		this.adjacencyList = {}
	}

	// 4 basic methods to implement graph : 
	// addVertex, addEdge, removeEdge, removeVertex

	addVertex(vertex: any) {
		// 		ADDING A VERTEX
		// Write a method called addVertex, which accepts a name of a vertex
		// It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
		// g.addVertex("Tokyo") will result into 
		// {
		//     "Tokyo": []
		// }
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1: any, vertex2: any) {
		// 		ADDING AN EDGE
		// This function should accept two vertices, we can call them vertex1 and vertex2
		// The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
		// The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
		// Don't worry about handling errors/invalid vertices

		// {
		// 	"Tokyo": [],
		// 	"Dallas": [],
		// 	"Aspen": []
		//   } then add edge
		//   g.addEdge("Tokyo", "Dallas") will result into
		//   {
		// 	"Tokyo": ["Dallas"],
		// 	"Dallas": ["Tokyo"],
		// 	"Aspen": []
		//   } then add edge
		//   g.addEdge("Dallas", "Aspen") will result into
		//   {
		// 	"Tokyo": ["Dallas"],
		// 	"Dallas": ["Tokyo", "Aspen"],
		// 	"Aspen": ["Dallas"]
		//   }
		if (!(this.adjacencyList[vertex1] || this.adjacencyList[vertex2])) {
			console.log('None of the vertex', vertex1, vertex2,' Exist');
			return;
		}
		if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
		if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1: any, vertex2: any) {
		// 		REMOVING AN EDGE
		// This function should accept two vertices, we'll call them vertex1 and vertex2
		// The function should reassign the key of vertex1 to be an array that does not contain vertex2
		// The function should reassign the key of vertex2 to be an array that does not contain vertex1
		// Don't worry about handling errors/invalid vertices

		// {
		// 	"Tokyo": ["Dallas"],
		// 	"Dallas": ["Tokyo", "Aspen"],
		// 	"Aspen": ["Dallas"]
		//   } then remove edge
		//   g.removeEdge("Tokyo", "Dallas") will result into
		//   {
		// 	"Tokyo": [],
		// 	"Dallas": ["Aspen"],
		// 	"Aspen": ["Dallas"]
		//   }
		if (!(this.adjacencyList[vertex1] || this.adjacencyList[vertex2])) {
			console.log('None of the vertex', vertex1, vertex2,' Exist');
			return;
		}
		if (this.adjacencyList[vertex1]) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v: any) => v !== vertex2);
		}
		if (this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v: any) => v !== vertex1);
		}
	}

	removeVertex(vertex: any) {
		// Removing a Vertex
		// 		The function should accept a vertex to remove
		// The function should loop as long as there are any other vertices in the adjacency list for that vertex
		// Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
		// delete the key in the adjacency list for that vertex

		// // {
		//   "Tokyo": ["Dallas", "Hong Kong"],
		//   "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
		//   "Aspen": ["Dallas"],
		//   "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
		//   "Los Angeles": ["Hong Kong", "Dallas"]
		// } then remove vertex
		// g.removeVertex("Hong Kong") will result to
		// {
		// 	"Tokyo": ["Dallas"],
		// 	"Dallas": ["Tokyo", "Aspen","Los Angeles"],
		// 	"Aspen": ["Dallas"],
		// 	"Los Angeles": ["Dallas"]
		//   }
		if (!this.adjacencyList[vertex]) {
			console.log(vertex,' Vertex dont Exist');
			return;
		}
		while(this.adjacencyList[vertex].length) {
			const edgeToRemove = this.adjacencyList[vertex].pop();
			this.removeEdge(edgeToRemove, vertex);
		}
		delete this.adjacencyList[vertex];
	}
}

// const g = new Graph();
// g.addVertex('Ambala');
// g.addVertex('Panchkula');
// g.addVertex('Chandigarh');
// g.addVertex('Delhi');
// g.addVertex('Karnal');
// console.log('-------------Adding Vertex-------');
// console.log(g);
// g.addEdge('Ambala', 'Noida');
// g.addEdge('Gurgaon', 'Delhi');
// g.addEdge('Panchkula', 'Chandigarh');
// g.addEdge('Panssschkula', 'Chandigssarh');
// console.log('-------------Adding Edge-------');
// console.log(g);
// g.removeEdge('hello', 'world');
// g.removeEdge('Ambala', 'Noida');
// g.removeEdge('Ambala', 'World');
// g.removeEdge('Hello', 'Ambala');
// console.log('-------------Removing Edge-------');
// console.log(g);
// console.log('-------------For Removing Vertex add some edges to Karnal-------');
// g.addEdge('Karnal', 'Chandigarh');
// g.addEdge('Karnal', 'Ambala');
// g.addEdge('Karnal', 'Noida');
// g.addEdge('Karnal', 'Delhi');
// console.log(g);
// console.log('-------------Remove Vertex-------');
// g.removeVertex('Karnal');
// g.removeVertex('Hello');
// console.log(g);

