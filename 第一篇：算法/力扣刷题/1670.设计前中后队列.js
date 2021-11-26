/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

var FrontMiddleBackQueue = function() {
  this.arr = []
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.arr.unshift(val)
  console.log(...this.arr)
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  let mid = (this.arr.length) >> 1
  this.arr.splice(mid, 0, val)
  console.log(...this.arr)
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.arr.push(val)
  console.log(...this.arr)
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popFront = function() {
  if (this.arr.length === 0) return -1
  return this.arr.length ? this.arr.shift() : -1
  console.log(...this.arr)
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (this.arr.length === 0) return -1
  let mid = (this.arr.length - 1) >> 1
  return this.arr.splice(mid, 1)
  console.log(...this.arr)
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popBack = function() {
  if (this.arr.length === 0) return -1
  return this.arr.length ? this.arr.pop() : -1
  console.log(...this.arr)
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end

