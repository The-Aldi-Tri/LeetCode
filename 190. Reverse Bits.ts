// Accepted
// Runtime: 65 ms, faster than 55.35%
// Memory Usage: 52.22 MB, less than 19.77%
function reverseBits(n: number): number {
    let bit = n.toString(2)

    while (bit.length < 32) {
        bit = "0" + bit
    }

    const reverseBit = bit.split("").reverse().join("")

    return parseInt(reverseBit, 2)
};

// Accepted
// Runtime: 64 ms, faster than 61.32%
// Memory Usage: 51.90 MB, less than 70.20%
// Bitwise Operation
// function reverseBits(n: number): number {
//     let ans = 0

//     for (let i = 0; i < 32; i++) {
//         ans |= (n & 1) << (31 - i)
//         n >>= 1
//     }

//     return ans >>> 0
// };