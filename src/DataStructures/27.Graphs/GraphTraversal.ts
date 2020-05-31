// GraphStructure
//					A
//				/		\
//				B		C
//				|		|
//				D_______E
//				  \	  /
//					F

import Graph from "./GraphImplementation";

export default class GraphTraversal extends Graph {
	// DFS PSEUDOCODE (Recursive)
	// DFS(vertex):
	// if vertex is empty
	//     return (this is base case)
	// add vertex to results list
	// mark vertex as visited
	// for each neighbor in vertex's neighbors:
	//    if neighbor is not visited:
	//		recursively call DFS on neighbor

	// 	The function should accept a starting node
	// Create a list to store the end result, to be returned at the very end
	// Create an object to store visited vertices
	// Create a helper function which accepts a vertex
	// The helper function should return early if the vertex is empty
	// The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
	// Loop over all of the values in the adjacencyList for that vertex
	// If any of those values have not been visited, recursively invoke the helper function with that vertex
	// Invoke the helper function with the starting vertex
	// Return the result array

	dfsRecursive(start: any) {
		const result = [];
		const visited: any = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex: any) {
			// base case
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach((neighbour: any) => {
				if (!visited[neighbour]) return dfs(neighbour);
			});
		})(start);
		return result;
	}

	// DFS PSEUDOCODE
	// Iterative
	// DFS-iterative(start):
	//     let S be a stack
	//     S.push(start)
	//     while S is not empty
	//         vertex = S.pop()
	//         if vertex is not labeled as discovered:
	//             visit vertex (add to result list)
	//             label vertex as discovered
	//             for each of vertex's neighbors, N do 
	//                 S.push(N)

	// 	The function should accept a starting node
	// Create a stack to help use keep track of vertices (use a list/array)
	// Create a list to store the end result, to be returned at the very end
	// Create an object to store visited vertices
	// Add the starting vertex to the stack, and mark it visited
	// While the stack has something in it:
	// 		Pop the next vertex from the stack
	// 		If that vertex hasn't been visited yet:
	// 			​Mark it as visited
	// 			Add it to the result list
	// 			Push all of its neighbors into the stack
	// Return the result array

	dfsIterative(start: any) {
		const stack = [start];
		const resultList = [];
		const visitedList: any = {}
		let currentValue;
		visitedList[start] = true;
		while (stack.length) {
			currentValue = stack.pop();
			resultList.push(currentValue);
			this.adjacencyList[currentValue].forEach((neighbour: any) => {
				if (!visitedList[neighbour]) {
					visitedList[neighbour] = true;
					stack.push(neighbour);
				}
			});
		}
		return resultList;
	}

	// 	BREADTH FIRST
	// This function should accept a starting vertex
	// Create a queue (you can use an array) and place the starting vertex in it
	// Create an array to store the nodes visited
	// Create an object to store nodes visited
	// Mark the starting vertex as visited
	// Loop as long as there is anything in the queue
	// Remove the first vertex from the queue and push it into the array that stores nodes visited
	// Loop over each vertex in the adjacency list for the vertex you are visiting.
	// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
	// Once you have finished looping, return the array of visited nodes

	bft(start: any){
		const queueList = [start];
		const resultBFT = [];
		const visitedBFT: any = {};
		let currentVertex;
		visitedBFT[start] = true;
		while(queueList.length){
			currentVertex = queueList.shift();
			resultBFT.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((nieghbour: any) => {
				if(!visitedBFT[nieghbour]){
					visitedBFT[nieghbour] = true;
					queueList.push(nieghbour)
				}
			});
		}
		return resultBFT;
	}

}

const gt = new GraphTraversal();
gt.addVertex("A")
gt.addVertex("B")
gt.addVertex("C")
gt.addVertex("D")
gt.addVertex("E")
gt.addVertex("F")

gt.addEdge("A", "B")
gt.addEdge("A", "C")
gt.addEdge("B", "D")
gt.addEdge("C", "E")
gt.addEdge("D", "E")
gt.addEdge("D", "F")
gt.addEdge("E", "F")
console.log(gt);
const result = gt.dfsRecursive('A');
console.log(result);
const resultList = gt.dfsIterative('A');
console.log(resultList);
const resultListBFT = gt.bft('A');
console.log(resultListBFT);