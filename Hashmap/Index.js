var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.arr.push(num);
  this.arr.sort((a, b) => a - b);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let n = this.arr.length;

  // odd length
  if (n % 2 === 1) {
    return this.arr[Math.floor(n / 2)];
  }

  // even length
  return (this.arr[n / 2] + this.arr[n / 2 - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder();

obj.addNum(2);
console.log(obj);
