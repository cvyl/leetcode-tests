function isPalindrome(s: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumeric = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Compare the string with its reverse
    return alphanumeric === alphanumeric.split('').reverse().join('');
};