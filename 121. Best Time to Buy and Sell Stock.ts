// Accepted
// Runtime: 2 ms, faster than 76.59%
// Memory Usage: 59.48 MB, less than 86.61%
function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i <= prices.length - 1; i++) {
        const currentPrice = prices[i];
        const profit = currentPrice - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }

    return maxProfit;
};