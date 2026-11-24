<h2><a href="https://leetcode.com/problems/validate-stack-sequences">Validate Stack Sequences</a></h2> <img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" /><hr>Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

 
Example 1:


Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -&gt; 4,
push(5),
pop() -&gt; 5, pop() -&gt; 3, pop() -&gt; 2, pop() -&gt; 1


Example 2:


Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.


 
Constraints:


	1 &lt;= pushed.length &lt;= 1000
	0 &lt;= pushed[i] &lt;= 1000
	All the elements of pushed are unique.
	popped.length == pushed.length
	popped is a permutation of pushed.
