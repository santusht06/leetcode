var getNumberOfBacklogOrders = function (orders) {
  const MOD = 1e9 + 7;

  // Max heap for buy: [price, amount]
  let buy = [];
  // Min heap for sell: [price, amount]
  let sell = [];

  // Helper: insert into heap
  const push = (heap, val, isMax) => {
    heap.push(val);
    heap.sort((a, b) => (isMax ? b[0] - a[0] : a[0] - b[0]));
  };

  for (let [price, amount, type] of orders) {
    if (type === 0) {
      // BUY
      while (amount > 0 && sell.length > 0 && sell[0][0] <= price) {
        let [sPrice, sAmount] = sell[0];

        let used = Math.min(amount, sAmount);
        amount -= used;
        sAmount -= used;

        if (sAmount === 0) sell.shift();
        else sell[0][1] = sAmount;
      }

      if (amount > 0) {
        push(buy, [price, amount], true);
      }
    } else {
      // SELL
      while (amount > 0 && buy.length > 0 && buy[0][0] >= price) {
        let [bPrice, bAmount] = buy[0];

        let used = Math.min(amount, bAmount);
        amount -= used;
        bAmount -= used;

        if (bAmount === 0) buy.shift();
        else buy[0][1] = bAmount;
      }

      if (amount > 0) {
        push(sell, [price, amount], false);
      }
    }
  }

  let total = 0;

  for (let [_, amt] of buy) total = (total + amt) % MOD;
  for (let [_, amt] of sell) total = (total + amt) % MOD;

  return total;
};
