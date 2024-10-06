
var MinStack = function() {
    MinStack.prototype.stack = []
    MinStack.prototype.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length == 0) {
        this.stack.push(val)
        this.minStack.push(val)
        return
    }

    let min = Math.min(this.stack[this.stack.length - 1], this.minStack[this.minStack.length - 1], val)
    this.stack.push(val)
    this.minStack.push(min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    this.minStack.pop()
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */