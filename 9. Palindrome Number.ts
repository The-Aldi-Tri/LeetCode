// Accepted
// Runtime: 8 ms, faster than 56.70%
// Memory Usage: 60.32 MB, less than 5.54%
function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const str = x.toString();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) return false;
    }

    return true;
};