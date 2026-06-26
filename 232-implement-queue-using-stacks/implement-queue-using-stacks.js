var MyQueue = function () {
    this.inStack = [];
    this.outStack = [];
};

MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
};

MyQueue.prototype.move = function () {
    if (this.outStack.length === 0) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
};

MyQueue.prototype.pop = function () {
    this.move();
    return this.outStack.pop();
};

MyQueue.prototype.peek = function () {
    this.move();
    return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.inStack.length === 0 && this.outStack.length === 0;
};