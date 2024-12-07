// Accepted
// Runtime: 2 ms, faster than 53.40%
// Memory Usage: 51.57 MB, less than 81.71%
function longestCommonPrefix(strs: string[]): string {
    let result = ""

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]

        const isSame = strs.every((str) => str[i] === char)

        if (!isSame) break

        result += char
    }

    return result
};