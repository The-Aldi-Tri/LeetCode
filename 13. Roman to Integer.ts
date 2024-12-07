// Accepted
// Runtime: 6 ms, faster than 71.56%
// Memory Usage: 57.40 MB, less than 31.60%
function romanToInt(s: string): number {
    const romanNumeral = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanNumeral.get(s[i]);
        const nextValue = romanNumeral.get(s[i + 1]);

        if (nextValue !== undefined && nextValue > currentValue!) {
            result -= currentValue!;
        } else {
            result += currentValue!;
        }
    }
    return result;
};