// Accepted
// Runtime: 2 ms, faster than 81.13%
// Memory Usage: 52.17 MB, less than 87.44%
function isValid(s: string): boolean {
    const stack = [];

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
            continue;
        }

        const len = stack.length
        if (len === 0) {
            return false;
        }

        const top = stack[len - 1];
        switch (top) {
            case '(':
                if (char !== ')') { return false; }
                break;
            case '[':
                if (char !== ']') { return false; }
                break;
            case '{':
                if (char !== '}') { return false; }
                break;
        }
        stack.pop()
    }

    return stack.length === 0;
}