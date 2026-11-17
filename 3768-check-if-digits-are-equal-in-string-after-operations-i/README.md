<h2><a href="https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i">Check If Digits Are Equal in String After Operations I</a></h2> <img src="https://img.shields.io/badge/Difficulty-Easy-green" alt="Difficulty: Easy" /><hr>You are given a string s consisting of digits. Perform the following operation repeatedly until the string has exactly two digits:


	For each pair of consecutive digits in s, starting from the first digit, calculate a new digit as the sum of the two digits modulo 10.
	Replace s with the sequence of newly calculated digits, maintaining the order in which they are computed.


Return true if the final two digits in s are the same; otherwise, return false.

 
Example 1:


Input: s = &quot;3902&quot;

Output: true

Explanation:


	Initially, s = &quot;3902&quot;
	First operation:
	
		(s[0] + s[1]) % 10 = (3 + 9) % 10 = 2
		(s[1] + s[2]) % 10 = (9 + 0) % 10 = 9
		(s[2] + s[3]) % 10 = (0 + 2) % 10 = 2
		s becomes &quot;292&quot;
	
	
	Second operation:
	
		(s[0] + s[1]) % 10 = (2 + 9) % 10 = 1
		(s[1] + s[2]) % 10 = (9 + 2) % 10 = 1
		s becomes &quot;11&quot;
	
	
	Since the digits in &quot;11&quot; are the same, the output is true.



Example 2:


Input: s = &quot;34789&quot;

Output: false

Explanation:


	Initially, s = &quot;34789&quot;.
	After the first operation, s = &quot;7157&quot;.
	After the second operation, s = &quot;862&quot;.
	After the third operation, s = &quot;48&quot;.
	Since &#39;4&#39; != &#39;8&#39;, the output is false.



 
Constraints:


	3 &lt;= s.length &lt;= 100
	s consists of only digits.
