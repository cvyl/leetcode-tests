function lengthOfLastWord(s: string): number {
    return s.split(" ").reverse().find((word) => word.length >= 1)!.length;
};

/*
Problem 58: Length of Last Word
Fixed with a one-liner that splits the string by spaces,
reverses array, and finds the first word with a length greater than or equal to one.
*/