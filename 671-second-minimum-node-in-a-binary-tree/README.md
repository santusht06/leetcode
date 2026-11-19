<h2><a href="https://leetcode.com/problems/second-minimum-node-in-a-binary-tree">Second Minimum Node In a Binary Tree</a></h2> <img src="https://img.shields.io/badge/Difficulty-Easy-green" alt="Difficulty: Easy" /><hr>Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node&#39;s value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes&#39; value in the whole tree.

If no such second minimum value exists, output -1 instead.

 

 
Example 1:


Input: root = [2,2,5,null,null,5,7]
Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.


Example 2:


Input: root = [2,2,2]
Output: -1
Explanation: The smallest value is 2, but there isn&#39;t any second smallest value.


 
Constraints:


	The number of nodes in the tree is in the range [1, 25].
	1 &lt;= Node.val &lt;= 231 - 1
	root.val == min(root.left.val, root.right.val) for each internal node of the tree.
