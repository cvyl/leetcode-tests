/*
Roman Numeral to Integer
Given a roman numeral, convert it to an integer.

Time complexity: O(n)
Space complexity: O(1)
*/

const symbolicValues: { [key: string]: number } = {
    'I': 1,     // 1
    'V': 5,     // 5
    'X': 10,    // 10
    'L': 50,    // 50
    'C': 100,   // 100
    'D': 500,   // 500
    'M': 1000   // 1000
};

function romanToInt(s: string): number {
    const stringList = s.split('');  // convert the string to a list of characters
    let output = symbolicValues[stringList[stringList.length - 1]];  // set the output to the value of the last character

    for (let i = stringList.length - 2; i >= 0; i--) {  // iterate through the string from the second last character
        const current = symbolicValues[stringList[i]];  // get the value of the current character
        const previous = symbolicValues[stringList[i + 1]];  // get the value of the previous character

        if (current < previous) output -= current;  // if the current value is less than the previous value, subtract it from the output
        else output += current;  // otherwise, add it to the output
    }
    return output;
};