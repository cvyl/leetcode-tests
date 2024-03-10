/*
Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Approach:
1. If the number is negative or a multiple of 10, it can't be a palindrome.
2. Convert the number to a string.
3. Iterate through the string from the start and end.
4. If the characters at the start and end don't match, return false.
5. If the loop completes, return true.

Time complexity: O(n)
Space complexity: O(1)
*/

function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    if (x < 10) return true;

    const str = x.toString();

    const middleIndex = Math.floor(str.length / 2) - 1;
    let index = 0;

    for (let reverseIndex = str.length - 1; reverseIndex > middleIndex; reverseIndex--) {
        if (str[index] !== str[reverseIndex]) return false;
        index++;
    }
    return true;
};