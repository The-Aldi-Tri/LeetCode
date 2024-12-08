// Accepted
// Runtime: 1 ms, faster than 73.92%
// Memory Usage: 52.52 MB, less than 24.52%
function addBinary(a: string, b: string): string {
    let i = a.length - 1
    let j = b.length - 1
    let result = ''
    let carry = 0

    while (i >= 0 || j >= 0) {
        let num1 = 0
        let num2 = 0

        if (i >= 0) {
            num1 = parseInt(a[i])
            i--
        }

        if (j >= 0) {
            num2 = parseInt(b[j])
            j--
        }

        let sum = num1 + num2 + carry;
        result = (sum % 2).toString() + result
        carry = Math.floor(sum / 2)
    }

    if (carry > 0) {
        result = carry.toString() + result
    }

    return result
};

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.49 MB, less than 93.68%
// function addBinary(a: string, b: string): string {
//     // `0b`prefix is used in JavaScript to denote a binary literal
//     // Using the 0b prefix with BigInt in JS allows to directly convert a binary string to its decimal (base 10) representation.
//     return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
// };

