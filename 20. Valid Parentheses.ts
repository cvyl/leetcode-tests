/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

*/

function isValid(s: string): boolean {
    const bracketMap: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (bracketMap[s[i]]) {
            if (stack.pop() !== bracketMap[s[i]]) return false;
        } else {
            stack.push(s[i]);
        }
    }
    return !stack.length;
    
};