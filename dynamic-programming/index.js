var getNumberOfBacklogOrders = function (orders) {
  const MOD = 1e9 + 7;

  class Heap {
    constructor(compare) {
      this.data = [];
      this.compare = compare;
    }

    size() {
      return this.data.length;
    }

    peek() {
      return this.data[0];
    }

    push(val) {
      this.data.push(val);
      this._up();
    }

    pop() {
      if (this.size() === 1) return this.data.pop();

      const top = this.data[0];
      this.data[0] = this.data.pop();
      this._down();
      return top;
    }

    _up() {
      let i = this.size() - 1;
      while (i > 0) {
        let p = Math.floor((i - 1) / 2);
        if (this.compare(this.data[i], this.data[p])) {
          [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
          i = p;
        } else break;
      }
    }

    _down() {
      let i = 0;
      let n = this.size();

      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let best = i;

        if (left < n && this.compare(this.data[left], this.data[best])) {
          best = left;
        }
        if (right < n && this.compare(this.data[right], this.data[best])) {
          best = right;
        }

        if (best !== i) {
          [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
          i = best;
        } else break;
      }
    }
  }

  // max heap (buy)
  let buy = new Heap((a, b) => a[0] > b[0]);

  // min heap (sell)
  let sell = new Heap((a, b) => a[0] < b[0]);

  for (let [price, amount, type] of orders) {
    if (type === 0) {
      // BUY
      while (amount > 0 && sell.size() && sell.peek()[0] <= price) {
        let [sPrice, sAmount] = sell.pop();

        let used = Math.min(amount, sAmount);
        amount -= used;
        sAmount -= used;

        if (sAmount > 0) {
          sell.push([sPrice, sAmount]);
        }
      }

      if (amount > 0) {
        buy.push([price, amount]);
      }
    } else {
      // SELL
      while (amount > 0 && buy.size() && buy.peek()[0] >= price) {
        let [bPrice, bAmount] = buy.pop();

        let used = Math.min(amount, bAmount);
        amount -= used;
        bAmount -= used;

        if (bAmount > 0) {
          buy.push([bPrice, bAmount]);
        }
      }

      if (amount > 0) {
        sell.push([price, amount]);
      }
    }
  }

  let total = 0;

  for (let [_, amt] of buy.data) total = (total + amt) % MOD;
  for (let [_, amt] of sell.data) total = (total + amt) % MOD;

  return total;
};
