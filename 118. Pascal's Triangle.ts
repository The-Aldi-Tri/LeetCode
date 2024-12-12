// Accepted
// Runtime: 1 ms, faster than 51.68%
// Memory Usage: 52.48 MB, less than 74.93%
function generate(numRows: number): number[][] {
    const result: number[][] = [[1]]

    if (numRows == 1) return result;

    for (let i = 1; i < numRows; i++) {
        const row: number[] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }

        result.push(row);
    }

    return result
};