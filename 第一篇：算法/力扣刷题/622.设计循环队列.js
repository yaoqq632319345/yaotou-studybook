/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.arr = new Array(k);
  this.cnt = 0
  this.tail = 0;
  this.head = 0;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.cnt === this.arr.length) return false
  this.arr[this.tail] = value
  this.cnt++
  this.tail = (this.tail + 1) % this.arr.length
  return true
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.cnt === 0) return false
  this.cnt--
  this.head = (this.head + 1) % this.arr.length
  return true
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.cnt === 0) return -1
  return this.arr[this.head]
  
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {

  if (this.cnt === 0) return -1
  const idx = (this.tail + this.arr.length - 1) % this.arr.length
  return this.arr[idx]
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.cnt === 0
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.cnt === this.arr.length
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
