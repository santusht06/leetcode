/**
 * @param {number} size
 */
var Bitset = function (size) {
  this.bits = new Array(size).fill(0);

  this.ones = 0;
  this.flipped = false;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
  let actual = this.flipped ? 1 - this.bits[idx] : this.bits[idx];

  if (actual === 0) {
    this.bits[idx] = this.flipped ? 0 : 1;
    this.ones++;
  }
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
  let actual = this.flipped ? 1 - this.bits[idx] : this.bits[idx];

  if (actual === 1) {
    this.bits[idx] = this.flipped ? 1 : 0;
    this.ones--;
  }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
  this.flipped = !this.flipped;
  this.ones = this.bits.length - this.ones;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
  return this.ones === this.bits.length;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
  return this.ones > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
  return this.ones;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
  let result = "";

  for (let bit of this.bits) {
    let actual = this.flipped ? 1 - bit : bit;
    result += actual;
  }

  return result;
};