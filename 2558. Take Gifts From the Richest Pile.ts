// Accepted
// Runtime: 22 ms, faster than 60.00%
// Memory Usage: 52.39 MB, less than 73.68%
function pickGifts(gifts: number[], k: number): number {
    for (let i = 1; i <= k; i++) {
        const max = Math.max(...gifts)
        const idMax = gifts.indexOf(max);

        gifts[idMax] = Math.floor(Math.sqrt(gifts[idMax]))
    }

    return gifts.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
};