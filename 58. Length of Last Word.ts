// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.54 MB, less than 35.11%
function lengthOfLastWord(s: string): number {
    let len = 0;
    let flag = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            len++;

            if (!flag) flag = true
        } else {
            if (flag) break;
        }
    }
    return len;
};