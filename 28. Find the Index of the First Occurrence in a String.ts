// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.19 MB, less than 81.58%
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle)
};

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.88 MB, less than 22.99%
// function strStr(haystack: string, needle: string): number {
//     for (let i = 0; i < haystack.length - needle.length + 1; i++) {
//         if (haystack[i] === needle[0]) {
//             for (let j = 0; j < needle.length; j++) {
//                 if (haystack[i + j] !== needle[j]) break;
//                 if (j === needle.length - 1) return i;
//             }
//         }
//     }
//     return -1;
// };