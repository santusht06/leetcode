<h2><a href="https://leetcode.com/problems/find-special-substring-of-length-k">Find Special Substring of Length K</a></h2> <img src="https://img.shields.io/badge/Difficulty-Easy-green" alt="Difficulty: Easy" /><hr>You are given a string s and an integer k.

Determine if there exists a substring of length exactly k in s that satisfies the following conditions:


	The substring consists of only one distinct character (e.g., &quot;aaa&quot; or &quot;bbb&quot;).
	If there is a character immediately before the substring, it must be different from the character in the substring.
	If there is a character immediately after the substring, it must also be different from the character in the substring.


Return true if such a substring exists. Otherwise, return false.

 
Example 1:


Input: s = &quot;aaabaaa&quot;, k = 3

Output: true

Explanation:

The substring s[4..6] == &quot;aaa&quot; satisfies the conditions.


	It has a length of 3.
	All characters are the same.
	The character before &quot;aaa&quot; is &#39;b&#39;, which is different from &#39;a&#39;.
	There is no character after &quot;aaa&quot;.



Example 2:


Input: s = &quot;abc&quot;, k = 2

Output: false

Explanation:

There is no substring of length 2 that consists of one distinct character and satisfies the conditions.


 
Constraints:


	1 &lt;= k &lt;= s.length &lt;= 100
	s consists of lowercase English letters only.
