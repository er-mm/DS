// Ques1 : Invert Binary Tree
// input [4,2,7,1,3,6,9]
// output [4,7,2,9,6,3,1]

/**
 * Solution
 * 
 * ////////////////////JS Solution 
//  * /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// var invertTree = function(root) {
    
//     if(!root) return root;
    
//     const left = invertTree(root.left);
//     const right = invertTree(root.right);

//     root.left = right;
//     root.right = left;
    
//     return root;
// };
//////////////////////////////////////////////////////////////////////
// Approach #1 (Recursive) [Accepted]
// This is a classic tree problem that is best-suited for a recursive approach.

// Algorithm

// The inverse of an empty tree is the empty tree. The inverse of a tree with root rr, and subtrees \mbox{right} and \mbox{left}, is a tree with root rr, whose right subtree is the inverse of \mbox{left}, and whose left subtree is the inverse of \mbox{right}.

// Java

// public TreeNode invertTree(TreeNode root) {
//     if (root == null) {
//         return null;
//     }
//     TreeNode right = invertTree(root.right);
//     TreeNode left = invertTree(root.left);
//     root.left = right;
//     root.right = left;
//     return root;
// }
// Complexity Analysis

// Since each node in the tree is visited only once, the time complexity is O(n)O(n), where nn is the number of nodes in the tree. We cannot do better than that, since at the very least we have to visit each node to invert it.

// Because of recursion, O(h)O(h) function calls will be placed on the stack in the worst case, where hh is the height of the tree. Because h\in O(n)h∈O(n), the space complexity is O(n)O(n).

// Approach #2 (Iterative) [Accepted]
// Alternatively, we can solve the problem iteratively, in a manner similar to breadth-first search.

// Algorithm

// The idea is that we need to swap the left and right child of all nodes in the tree. So we create a queue to store nodes whose left and right child have not been swapped yet. Initially, only the root is in the queue. As long as the queue is not empty, remove the next node from the queue, swap its children, and add the children to the queue. Null nodes are not added to the queue. Eventually, the queue will be empty and all the children swapped, and we return the original root.

// Java

// public TreeNode invertTree(TreeNode root) {
//     if (root == null) return null;
//     Queue<TreeNode> queue = new LinkedList<TreeNode>();
//     queue.add(root);
//     while (!queue.isEmpty()) {
//         TreeNode current = queue.poll();
//         TreeNode temp = current.left;
//         current.left = current.right;
//         current.right = temp;
//         if (current.left != null) queue.add(current.left);
//         if (current.right != null) queue.add(current.right);
//     }
//     return root;
// }
// Complexity Analysis

// Since each node in the tree is visited / added to the queue only once, the time complexity is O(n)O(n), where nn is the number of nodes in the tree.

// Space complexity is O(n)O(n), since in the worst case, the queue will contain all nodes in one level of the binary tree. For a full binary tree, the leaf level has \lceil \frac{n}{2}\rceil=O(n)⌈ 
// 2
// n
// ​	
//  ⌉=O(n) leaves.
//  */
//______________________________________________________________________________________________________________________________________________________

// Ques 2: Delete Node in a Linked List
// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
// Example 1:

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:

// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your f
// Note:

// The linked list will have at least two elements.
// All of the nodes' values will be unique.
// The given node will not be the tail and it will always be a valid node of the linked list.
// Do not return anything from your function.

//Solution : 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// var deleteNode = function(node) {
//     let temp = node.next;
//     node.val = temp.val;
//     node.next = temp.next;
//     temp = null;
    
// };

// OR 
// public void deleteNode(ListNode node) {
//     node.val = node.next.val;
//     node.next = node.next.next;
// }
// _________________________________________________________________________________________________________________________________

//Two City Scheduling

// There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

 

// Example 1:

// Input: [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 

// Note:

// 1 <= costs.length <= 100
// It is guaranteed that costs.length is even.
// 1 <= costs[i][0], costs[i][1] <= 1000
//
//  Solution : 
/**
 * @param {number[][]} costs
 * @return {number}
 */
// var twoCitySchedCost = function(costs) {
//     let minCost = 0;
//     let a = 0;
//     let b = 0;
//     costs.sort((a,b) => Math.abs(b[0]-b[1]) - Math.abs(a[0]-a[1]));
//     let half = costs.length / 2;
//     for(let i=0; i< 2*half; i++){
//         if((costs[i][0] < costs[i][1] && a < half) || b===half){
//             a++;
//             minCost += costs[i][0]
//         } else {
//             b++;
//             minCost += costs[i][1]
//         }
//     }
        
//     return minCost;
// };
