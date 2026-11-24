<h2><a href="https://leetcode.com/problems/count-binary-substrings">Count Binary Substrings</a></h2> <img src="https://img.shields.io/badge/Difficulty-Easy-green" alt="Difficulty: Easy" /><hr>Given a binary string s, return the number of non-empty substrings that have the same number of 0&#39;s and 1&#39;s, and all the 0&#39;s and all the 1&#39;s in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

 
Example 1:


Input: s = &quot;00110011&quot;
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1&#39;s and 0&#39;s: &quot;0011&quot;, &quot;01&quot;, &quot;1100&quot;, &quot;10&quot;, &quot;0011&quot;, and &quot;01&quot;.
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, &quot;00110011&quot; is not a valid substring because all the 0&#39;s (and 1&#39;s) are not grouped together.


Example 2:


Input: s = &quot;10101&quot;
Output: 4
Explanation: There are 4 substrings: &quot;10&quot;, &quot;01&quot;, &quot;10&quot;, &quot;01&quot; that have equal number of consecutive 1&#39;s and 0&#39;s.


 
Constraints:


	1 &lt;= s.length &lt;= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.
