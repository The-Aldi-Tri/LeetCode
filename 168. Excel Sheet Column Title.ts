// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 50.01 MB, less than 68.91%
function convertToTitle(columnNumber: number): string {
    let title = ""

    while (columnNumber > 0) {
        columnNumber-- // Adjust because the system is 1-based, not 0-based (A is start from 1, not 0)

        const remainder = columnNumber % 26

        title = String.fromCharCode(65 + remainder) + title

        columnNumber = Math.floor(columnNumber / 26);
    }

    return title
};