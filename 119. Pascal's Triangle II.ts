// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 52.04 MB, less than 15.86%
function getRow(rowIndex: number): number[] {
    const result: number[][] = [[1]]

    if (rowIndex == 0) return result[0];

    for (let i = 1; i <= rowIndex; i++) {
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

    return result[rowIndex];
};