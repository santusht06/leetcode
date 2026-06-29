var maxProfit = function (prices) {
    let hold = -prices[0];
    let cash = 0;

    for (let i = 1; i < prices.length; i++) {
        const prevCash = cash;

        cash = Math.max(cash, hold + prices[i]);
        hold = Math.max(hold, prevCash - prices[i]);
    }

    return cash;
};