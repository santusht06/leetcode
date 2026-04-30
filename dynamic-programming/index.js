var maximumProfit = function (prices, k) {
  const n = prices.length;

  // Unlimited transactions case
  if (k >= n / 2) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      profit += Math.abs(prices[i] - prices[i - 1]);
    }
    return profit;
  }

  const buy = Array(k + 1).fill(-Infinity);
  const sell = Array(k + 1).fill(0);
  const short = Array(k + 1).fill(-Infinity);
  const cover = Array(k + 1).fill(0);

  for (let price of prices) {
    for (let t = 1; t <= k; t++) {
      // Normal transaction
      buy[t] = Math.max(buy[t], sell[t - 1] - price);
      sell[t] = Math.max(sell[t], buy[t] + price);

      // Short transaction
      short[t] = Math.max(short[t], cover[t - 1] + price);
      cover[t] = Math.max(cover[t], short[t] - price);
    }
  }

  return Math.max(sell[k], cover[k]);
};
