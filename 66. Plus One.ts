// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.45 MB, less than 48.63%
// function plusOne(digits: number[]): number[] {
//     const lenDigits = digits.length;

//     let carry = Math.floor((digits[lenDigits - 1] + 1) / 10);
//     digits[lenDigits - 1] = (digits[lenDigits - 1] + 1) % 10;

//     for (let i = lenDigits - 2; i >= 0 && carry; i--) {
//         let sum = digits[i] + carry;
//         carry = Math.floor(sum / 10);
//         digits[i] = sum % 10;
//     }

//     if (carry) {
//         digits.unshift(carry)
//     }

//     return digits;
// };

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 52 MB, less than 6.83%
function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;

    let sum = digits[i] + 1;
    let carry = Math.floor(sum / 10);
    digits[i] = sum % 10;

    for (i = i - 1; i >= 0 && carry > 0; i--) {
        sum = digits[i] + carry;
        carry = Math.floor(sum / 10);
        digits[i] = sum % 10;
    }

    if (carry > 0) {
        digits.unshift(carry)
    }

    return digits;
};