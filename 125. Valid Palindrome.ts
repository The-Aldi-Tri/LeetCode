// Accepted
// Runtime: 3 ms, faster than 88.89%
// Memory Usage: 52.60 MB, less than 76.28%
function isPalindrome(s: string): boolean {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) return false
    }
    return true
};